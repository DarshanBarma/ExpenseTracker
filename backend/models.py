from pydantic import BaseModel
from typing import Literal

class Data(BaseModel):
    name: str
    amount: float
    type: Literal["credit", "debit"]
