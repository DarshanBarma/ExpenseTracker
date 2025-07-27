# 💰 Expense Tracker (FastAPI + MongoDB + Next.js)

Track your expenses with a minimal full-stack app built using:
- 🔥 FastAPI + MongoDB (Backend)
- ⚡ Next.js (Frontend)

---

## 📁 Project Structure

```
ExpenseTracker/
├── backend/
│   ├── main.py
│   ├── database.py
│   ├── routes.py
│   ├── models.py
│   └── schemas.py
├── frontend/
│   ├── app/
│   ├── public/
│   ├── package.json
│   ├── jsconfig.json
│   └── ...
└── README.md
```

---

## ⚙️ Backend Setup (FastAPI + MongoDB)

### 1. Create `.env` file
In the `backend/` directory, create a `.env` file with the following:

```env
MONGO_URI=mongodb://localhost:27017
```

### 2. Install Python dependencies

```bash
cd backend
pip install fastapi uvicorn pymongo python-dotenv
```

Or using `requirements.txt`:

```txt
fastapi
uvicorn
pymongo
python-dotenv
```

### 3. Run FastAPI server

```bash
uvicorn main:app --reload
```

> - API Base URL: http://127.0.0.1:8000  
> - Swagger Docs: http://127.0.0.1:8000/docs

---

## 🌐 Frontend Setup (Next.js)

### 1. Install Node.js dependencies

```bash
cd frontend
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

> App runs at: http://localhost:3000

---

## 🧠 Features

- Add, view, and list all transactions.
- View total balance (credit - debit).
- Backend API built using FastAPI and MongoDB.
- Simple UI built with Next.js and React hooks.

---

## 📌 Tech Stack

| Part      | Technology     |
|-----------|----------------|
| Frontend  | React + Next.js |
| Backend   | FastAPI        |
| Database  | MongoDB        |
| Styling   | Tailwind CSS (Optional) |

---

## 📂 Future Improvements

- Add authentication.
- Graphs for monthly expense insights.
- Export to Excel or CSV.
- Filter/sort transactions.

---

## 🧑‍💻 Author

Made by Darshan Barma — feel free to connect!

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).