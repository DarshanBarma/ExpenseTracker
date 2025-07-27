"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [transactions, setTransactions] = useState([]);
  const [clicked, setClicked] = useState();
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    creditDebit: "",
  });
  const [balance, setBalance] = useState(0);

  const onValuesChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.amount || !formData.creditDebit) {
      alert("Please fill in all fields correctly.");
      return;
    }

    try {
      const res = await axios.post("http://127.0.0.1:8000/transactions/", {
        name: formData.name,
        amount: parseFloat(formData.amount),
        type: formData.creditDebit.toLowerCase(),
      });

      console.log("Data sent", res.data);

      await fetchTransactions();
      await balanceCheck();

      setFormData({
        name: "",
        amount: "",
        creditDebit: "",
      });
    } catch (error) {
      console.log(`Error occurred: ${error}`);
    }
  };

  const balanceCheck = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/");
      const transactions = res.data;

      let debit = 0;
      let credit = 0;

      transactions.forEach((tx) => {
        const amount = parseFloat(tx.amount);
        if (tx.type.toLowerCase() === "credit") {
          credit += amount;
        } else if (tx.type.toLowerCase() === "debit") {
          debit += amount;
        }
      });

      const total = credit - debit;
      setBalance(total);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTransactions = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/");
      console.log("Fetched Transactions");
      setTransactions([...res.data].reverse()); 
      setClicked(0);
    } catch (error) {
      console.error("An error occurred", error);
    }
  };

  useEffect(() => {
    balanceCheck();
  }, []);

  return (
    <div className="px-16 py-10">
      <div className="bg-[#1A1A1A] p-8 rounded-4xl text-center">
        <p className="text-3xl font-bold text-[#F5F5F5]">
          Welcome to Expense Tracker
        </p>
      </div>

      <div>
        <div className="px-16 mt-8 text-center">
          <p className="text-xl p-3 text-[#A3A3A3]">Get all transactions</p>
          <button
            className="bg-emerald-800 hover:bg-emerald-900 w-1/4 p-4 rounded-full text-[#F5F5F5]"
            onClick={fetchTransactions}
          >
            Get
          </button>
        </div>

        <div>
          <p className="text-2xl text-center text-white mt-4">
            💰 Current Balance: ₹ {balance}
          </p>
        </div>
      </div>

      <div className="my-6 p-6 bg-[#1A1A1A] rounded-2xl text-white">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Enter the name"
            value={formData.name}
            className="p-3 px-5 rounded-2xl bg-[#333] text-white"
            onChange={onValuesChange}
          />
          <input
            type="number"
            name="amount"
            placeholder="Enter the amount"
            value={formData.amount}
            className="p-3 px-5 rounded-2xl bg-[#333] text-white"
            onChange={onValuesChange}
          />
          <select
            name="creditDebit"
            value={formData.creditDebit}
            className="p-3 px-5 rounded-2xl bg-[#333] text-white"
            onChange={onValuesChange}
          >
            <option value="">Select Type</option>
            <option value="credit">Credit</option>
            <option value="debit">Debit</option>
          </select>
          <button
            className="bg-emerald-800 w-1/4 p-3 rounded-full"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="rounded-4xl my-8">
        <h1
          className={`text-center text-3xl p-3 underline ${
            clicked !== undefined ? "visible" : "invisible"
          }`}
        >
          Transactions
        </h1>
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="bg-[#262626] p-5 my-4 rounded-xl flex justify-between text-[#F5F5F5]"
          >
            <div className="text-white">
              <p className="text-lg">Transaction ID: {transaction.id}</p>
              <p className="text-lg">Name: {transaction.name}</p>
            </div>
            <div>
              <p
                className={`font-semibold ${
                  transaction.type === "credit"
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                Amount: ₹ {transaction.amount}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
