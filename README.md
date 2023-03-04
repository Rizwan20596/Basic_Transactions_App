# HighLevel_Assessment

This project has two folders namely frontend and backend and the frontend has the code for the UI and backend has the code for API's.
Backend uses the below tech stack:
Node Js, Express Js, MongoDB

Frontend uses the below tech stack:
React JS

Please add a .env file in the backend folder with PORT and MONGODB_URI
To run backend app, goto /backend folder in terminal, do npm install and then run npm start
To run frontend app, goto /frontend/wallet_ui folder in terminal, do npm install and then run npm start

API Endpoints :
'/api/wallet' --> to get all wallets.
example:
localhost:3000/api/wallet  --> 
response: {
    "data": []
}
'/api/wallet/setup' --> to create a wallet
example:
localhost:3000/api/wallet/setup --> 
request body: 
{
    "balance":300,
    "Name": "Wallet 3"
}
response: 
{
  "data": {
        "_id": "64023aff7f20468863821678",
        "balance": 300,
        "Name": "Wallet 3",
        "created_date": "2023-03-03T18:22:55.179Z",
        "__v": 0
    }
}

'/api/wallet/:id' --> get a wallet details.
example:
localhost:3000/api/wallet/64023aff7f20468863821678
repsonse: 
 {
 "data": {
        "_id": "64023aff7f20468863821678",
        "balance": 300,
        "Name": "Wallet 3",
        "created_date": "2023-03-03T18:22:55.179Z",
        "__v": 0
    }}



'/api/transactions' --> to get all transactions.
example:
localhost:3000/api/transactions --> 
response: {
  data:[],
}


'/api/transactions/transact/:wallet_id' --> to create a transaction.
example:
localhost:3000/api/transactions/transact/64023aff7f20468863821678
response: 
{
    "data": {
        "wallet_id": [
            "64023aff7f20468863821678"
        ],
        "amount": -20,
        "balance": 220,
        "description": "Recharge",
        "type": "Debit",
        "_id": "64023e57952be40f378ca757",
        "updated_date": "2023-03-03T18:37:11.309Z",
        "__v": 0
    }
}

'/api/transactions/:id' --> get a transaction details.
example:
localhost:3000/api/transactions/64023e57952be40f378ca757
response:
{
    "data": {
        "_id": "64023e57952be40f378ca757",
        "wallet_id": [
            "64023aff7f20468863821678"
        ],
        "amount": -20,
        "balance": 220,
        "description": "Recharge",
        "type": "Debit",
        "updated_date": "2023-03-03T18:37:11.309Z",
        "__v": 0
    }
}

'/api/transactions/wallet/:wallet_id' --> get all transactions of a specific wallet
example:
localhost:3000/api/transactions/wallet/64023aff7f20468863821678
response:
{
    "data": [
        {
            "_id": "64023d1bac31d813f0523050",
            "wallet_id": [
                "64023aff7f20468863821678"
            ],
            "amount": -20,
            "description": "Recharge",
            "type": "Debit",
            "updated_date": "2023-03-03T18:31:55.671Z",
            "__v": 0
        },
        {
            "_id": "64023d663ce3526db034f976",
            "wallet_id": [
                "64023aff7f20468863821678"
            ],
            "amount": -20,
            "description": "Recharge",
            "type": "Debit",
            "updated_date": "2023-03-03T18:33:10.700Z",
            "__v": 0
        },
        {
            "_id": "64023de43ce3526db034f97c",
            "wallet_id": [
                "64023aff7f20468863821678"
            ],
            "amount": -20,
            "description": "Recharge",
            "type": "Debit",
            "updated_date": "2023-03-03T18:35:16.291Z",
            "__v": 0
        },
        {
            "_id": "64023e40adf289c7246982a9",
            "wallet_id": [
                "64023aff7f20468863821678"
            ],
            "amount": -20,
            "description": "Recharge",
            "type": "Debit",
            "updated_date": "2023-03-03T18:36:48.127Z",
            "__v": 0
        },
        {
            "_id": "64023e57952be40f378ca757",
            "wallet_id": [
                "64023aff7f20468863821678"
            ],
            "amount": -20,
            "balance": 220,
            "description": "Recharge",
            "type": "Debit",
            "updated_date": "2023-03-03T18:37:11.309Z",
            "__v": 0
        },
        {
            "_id": "64023ff4230c6e01d742c05b",
            "wallet_id": [
                "64023aff7f20468863821678"
            ],
            "amount": -20.5,
            "balance": 220,
            "description": "Test decimal",
            "type": "Debit",
            "updated_date": "2023-03-03T18:44:04.112Z",
            "__v": 0
        }
    ]
}


Loom video of demo: https://www.loom.com/share/e1bcfb6df2204e7f9dc2cd5d6ec94f9c
