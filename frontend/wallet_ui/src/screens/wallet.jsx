import React, { useRef, useState } from "react";

const Wallet = () => {
    const  formRef = useRef(null);
    const [state,setState] = useState({});
    
    const updateWalletValues = (field, value) => {
        let clonedState = {...state};
        clonedState[field] = value;
        setState(clonedState);
    }

    saveWallet = ()  => {
        //make API call with the above values
        //let response = await fetch();
        //save the wallet id in local storage

    }
    return(
        <div>
            <form ref={formRef}>
                <div>
                    <input id='name' name='name' type='text' onChange={(e) => updateWalletValues('name', e.target.value)}/>
                </div>
                <div>
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