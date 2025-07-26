from pymongo.mongo_client import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

DATABASE_URI = os.getenv("DATABASE_URI")

client = MongoClient(DATABASE_URI)

db = client.expense_db

collection = db["UsersExpense"]

