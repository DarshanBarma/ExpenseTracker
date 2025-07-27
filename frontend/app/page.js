"use client";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [transactions, setTransactions] = useState([]);
  const [clicked, setClicked] = useState()

  const fetchTransactions = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/");
      console.log("Fetched Transactions");
      console.log(res.data);
      setTransactions(res.data);
      setClicked(0)
    } catch (error) {
      console.error(("An error occured", error));
    }
  };

  return (
    <>
      <div className="px-16 py-10">
        <div className="bg-[#1A1A1A] p-8 rounded-4xl text-center">
          <p className="text-3xl font-bold text-[#F5F5F5]">
            Welcome to Expense Tracker
          </p>
        </div>
        <div className="px-16 mt-8 text-center">
          <p className="text-xl p-3 text-[#A3A3A3]">Get last 5 transactions</p>
          <button
            className="bg-emerald-800 hover:bg-emerald-900 w-1/4 p-4 rounded-full text-[#F5F5F5]"
            onClick={fetchTransactions}
          >
            Get
          </button>
        </div> 
        <div className=" rounded-4xl my-8">
          <h1 className={`text-center text-3xl p-3 underline ${clicked !== undefined ? "visible" : "invisible"}`}>Transactions</h1>
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="bg-[#262626] p-5 my-4 rounded-xl flex justify-between text-[#F5F5F5]"
            >
              <div className="text-white">
                <p className="text-lg"> Transaction ID : {transaction.id}</p>
                <p className="text-lg">Name : {transaction.name}</p>
              </div>
              <div>
                <p className={`font-semibold ${transaction.type === 'credit'? "text-green-400" : "text-red-400"}`}>Amount : ₹ {transaction.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
