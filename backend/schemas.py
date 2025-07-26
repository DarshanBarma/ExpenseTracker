def individual_transaction(transaction) -> dict:
    return {
        'id' : str(transaction['_id']),
        'name' : transaction['name'],
        'amount' : transaction['amount'],
        'type': transaction['type']

    }


def list_transaction(transactions) -> list:
    return [individual_transaction(transaction) for transaction in transactions]