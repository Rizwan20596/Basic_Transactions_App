import React, { useEffect, useRef, useState } from "react";

const Wallet = () => {
    const  formRef = useRef(null);
    const [state,setState] = useState({});
    const [wallet,setWallet] = useState({});

    useEffect(() => {
        let activeWallet = window.localStorage.getItem('active_wallet');
        if(activeWallet){
            setWallet(JSON.parse(activeWallet))
        }
    },[]);
    
    const updateWalletValues = (field, value) => {
        let clonedState = {...state};
        if(field === 'type'){
            clonedState[field] = (value === true ? 'Credit' : 'Debit');
        }else{
            clonedState[field] = value;
        }
        setState(clonedState);
    }

    const saveWallet = async (e)  => {
        e.preventDefault();
        let url = "http://localhost:3000/api/wallet/setup";
        let res = await fetch(url, {
            method: "POST",
            body: JSON.stringify(state),
            headers: { "Content-Type": "application/json" }
        }).then((res) => res.json());
        if (res.data) {
            setWallet(res.data);
            window.localStorage.setItem('active_wallet', JSON.stringify(res.data));
        }
    }

    const saveTransaction = async (e) => {
        e.preventDefault();
        let url = `http://localhost:3000/api/transactions/transact/${wallet._id}`;
        let res = await fetch(url, {
            method: "POST",
            body: JSON.stringify(state),
            headers: { "Content-Type": "application/json" }
        }).then((res) => res.json());
        if (res.data) {
            await refreshWallet();
        }
    }

    const refreshWallet = async () => {
        let url = `http://localhost:3000/api/wallet/${wallet._id}`;
        let res = await fetch(url, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }).then((res) => res.json());
        setWallet(res.data);
    }

    return(
        <>
            {wallet && 
                <>
                    <div className="wallet-details">
                        <div className="wallet-details-span">
                            <strong>Active Wallet Name: </strong><span>{wallet.name}</span>
                        </div>
                        <div className="wallet-details-span">
                            <strong>Active Wallet Balance: </strong><span>{wallet.balance}</span>
                        </div>
                    </div>
                    <div className="wallet-details-header">
                        <span>Make a transaction</span>
                        <a href="/wallet-transactions">transaction list</a>
                    </div>
                    <div className="create-wallet transaction">
                    <form ref={formRef} className='create-wallet-form' onSubmit={(e) => { saveTransaction(e) }}>
                        <div>
                            <span>Amount:</span>
                            <input id='amount' name='amount' type='number' onChange={(e) => updateWalletValues('amount', e.target.value)} required />
                        </div>
                        <div>
                            <span>Description:</span>
                            <input id='description' name='description' type='text' onChange={(e) => updateWalletValues('description', e.target.value)} required />
                        </div>
                        <div>
                            <span>Credit?</span>
                            <input id='type' name='type' type='checkbox' onChange={(e) => updateWalletValues('type', e.target.value)} />
                        </div>
                        <div>
                            <button type='submit' id='submit'>Submit</button>
                        </div>

                    </form>
                    </div>
                </>
            }
            {!wallet &&
                <div className="create-wallet">
                    <form ref={formRef} className='create-wallet-form' onSubmit={(e) => { saveWallet(e) }}>
                        <div>
                            <span>Name:</span>
                            <input id='name' name='name' type='text' onChange={(e) => updateWalletValues('name', e.target.value)} required />
                        </div>
                        <div>
                            <span>Balance:</span>
                            <input id='balance' name='balance' type='number' onChange={(e) => updateWalletValues('balance', e.target.value)} />
                        </div>
                        <div>
                            <button type='submit' id='submit'>Submit</button>
                        </div>

                    </form>
                </div>
            }
        </>
    )
}

export default Wallet;