from pymongo.mongo_client import MongoClient


DATABASE_URI = 'mongodb+srv://darshanbarma2610:S7aD1Z53D0yKr1Bx@expensetracker.mmsahkk.mongodb.net/?retryWrites=true&w=majority&appName=ExpenseTracker'
client = MongoClient(DATABASE_URI)

db = client.expense_db

collection = db["UsersExpense"]

