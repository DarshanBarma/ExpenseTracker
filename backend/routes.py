from fastapi import APIRouter
from database import collection
from models import Data
from schemas import list_transaction
from bson import ObjectId

router = APIRouter()

#GET REQUEST 
@router.get('/')
async def getTransaction():
    trans = list_transaction(collection.find())
    return trans

#POST REQUEST
@router.post('/transactions')
async def addTransaction(transaction: Data):
    collection.insert_one(dict(transaction))
    return {
        "Success" : "Data sent"
    }

#PUT REQUEST
@router.put('/{id}')
async def updateTransaction(id: str, transaction: Data):
    collection.find_one_and_update({'_id': ObjectId(id)}, {'$set': dict(transaction)})
    return {
        "Message" : "Updated the transaction"
    }

#DELETE REQUEST
@router.delete('/transactions/{id}')
async def deleteTransaction(id:str):
    collection.find_one_and_delete({'_id': ObjectId(id)})
    return {
        'Message' : 'Transaction Deleted'
    }


