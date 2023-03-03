import React, { useRef, useState } from "react";

const Wallet = () => {
    const  formRef = useRef(null);
    const [state,setState] = useState({});
    
    const updateWalletValues = (field, value) => {
        let clonedState = {...state};
        clonedState[field] = value;
        setState(clonedState);
    }

    const saveWallet = ()  => {
        //make API call with the above values
        //let response = await fetch();
        //save the wallet id in local storage

    }
    return(
        <div className="create-wallet">
            <form ref={formRef} className='create-wallet-form'>
                <div>
                    <span>Name:</span>
                    <input id='name' name='name' type='text' onChange={(e) => updateWalletValues('name', e.target.value)} required/>
                </div>
                <div>
                    <span>Balance:</span>
                    <input id='balance' name='balance' type='number' onChange={(e) => updateWalletValues('balance', e.target.value)}/>
                </div>
                <div>
                    <button id='submit' onClick={() => {saveWallet()}}>Submit</button>
                </div>

            </form>
        </div>
    )
}

export default Wallet;