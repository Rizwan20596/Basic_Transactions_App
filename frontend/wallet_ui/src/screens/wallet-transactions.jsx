import React, { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'; 
import 'ag-grid-community/styles/ag-theme-alpine.css'; 

const WalletTransactions = () => {
    const [rowData,setRowData] = useState([]);
    const [columnDefs,setColumnDefs] = useState([
        { field: '_id' },
        { field: 'wallet_id' },
        { field: 'type', filter: true },
        { field: 'amount', sortable: true },
        { field: 'description', filter: true },
        { field: 'balance' },
        { field: 'updated_date', sortable: true },
        { field: 'actions'},
    ]);
    const wallet = JSON.parse(window.localStorage.getItem('active_wallet'));
    useEffect(() => {
        let url = `http://localhost:3000/api/transactions/wallet/${wallet._id}`;
        fetch(url, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }).then((res) => res.json()).then(json => setRowData(json.data));
    },[])
    console.log(rowData)

return(
    <>
    <div>
        <a href='/'>back</a>
    </div>
        <div className='grid-header'>
            <strong>
                <u>
                Transactions for wallet {wallet.name} with id {wallet._id}
                </u>
            </strong>
        </div>
        <div className='grid-body'>
        <div className="ag-theme-alpine" style={{ height: 400}}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                animateRows={true} 
                pagination={true}
                paginationPageSize={10}
                >
            </AgGridReact>
        </div>
        </div>
    </>
)
}

export default WalletTransactions;