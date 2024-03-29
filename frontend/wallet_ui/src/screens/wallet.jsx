import React, { useEffect, useRef, useState } from "react";

const Wallet = () => {
    const  formRef = useRef(null);
    const [state,setState] = useState({});
    const [wallet,setWallet] = useState({});

    useEffect(() => {
        let activeWallet = JSON.parse(window.localStorage.getItem('active_wallet'));
        if(activeWallet){
            let url = `https://test-services.onrender.com/api/wallet/${activeWallet._id}`;
            fetch(url, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            }).then((res) => res.json()).then(json => { setWallet(json.data); });
        }else{
            setWallet({})
        }
    },[]);
    
    const updateWalletValues = (field, value) => {
        let clonedState = {...state};
        if(field === 'type'){
            clonedState[field] = (value.target.checked === true ? 'Credit' : 'Debit');
        }else{
            clonedState[field] = value;
        }
        setState(clonedState);
    }

    const saveWallet = async (e)  => {
        e.preventDefault();
        let url = "https://test-services.onrender.com/api/wallet/setup";
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
        let url = `https://test-services.onrender.com/api/transactions/transact/${wallet._id}`;
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
        let url = `https://test-services.onrender.com/api/wallet/${wallet._id}`;
        let res = await fetch(url, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }).then((res) => res.json());
        setWallet(res.data);
    }

    const isNumberKey = (e) => {
        var charCode = (e.which) ? e.which : e.keyCode;
        if (charCode == 190) {
            return true;
        } else if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            e.preventDefault();
            return false;
        }        
        return true;
    }

    return(
        <>
            {wallet?._id && 
                <>
                    <div className="wallet-details-header">
                        <span>Make a transaction</span>
                        <a href="/wallet-transactions">transaction list</a>
                    </div>
                    <div className="create-wallet transaction">
                    <form ref={formRef} className='create-wallet-form' onSubmit={(e) => { saveTransaction(e) }}>
                        <div>
                            <span>Amount:</span>
                            <input id='amount' name='amount' pattern="^[0-9]+(\.[0-9]{1,4})?$" onKeyDown={(e) => isNumberKey(e)}  onChange={(e) => updateWalletValues('amount', e.target.value)} required />
                        </div>
                        <div>
                            <span>Description:</span>
                            <input id='description' name='description' type='text' onChange={(e) => updateWalletValues('description', e.target.value)} required />
                        </div>
                        <div>
                            <span>Credit?</span>
                            <input id='type' name='type' type='checkbox' onChange={(e) => updateWalletValues('type', e)} />
                        </div>
                        <div>
                            <button type='submit' id='submit'>Submit</button>
                        </div>

                    </form>
                    </div>
                    <div className="wallet-details">
                        <div className="wallet-details-span">
                            <strong>Active Wallet Name: </strong><span>{wallet.name}</span>
                        </div>
                        <div className="wallet-details-span">
                            <strong>Active Wallet Balance: </strong><span>{wallet.balance}</span>
                        </div>
                    </div>
                </>
            }
            {!wallet?._id &&
                <div className="create-wallet">
                    <form ref={formRef} className='create-wallet-form' onSubmit={(e) => { saveWallet(e) }}>
                        <div>
                            <span>Name:</span>
                            <input id='name' name='name' type='text' onChange={(e) => updateWalletValues('name', e.target.value)} required />
                        </div>
                        <div>
                            <span>Balance:</span>
                            <input id='balance' name='balance' pattern="^[0-9]+(\.[0-9]{1,4})?$"  onKeyDown={(e) => isNumberKey(e)} onChange={(e) => updateWalletValues('balance', e.target.value)} />
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