const transactionServices = require('../services/transaction_services');
const walletServices = require('../services/wallet_services');

exports.getAllTransactions = async (req,res) => {
    try{
        const transactions = await transactionServices.getAllTransactions();
        res.status(200).json({data: transactions});
    }catch(ex){
        res.status(500).json({ error: err.message });
    }
}

exports.createTransaction = async (req,res) => {
    try{
        const wallet = await walletServices.getWalletById(req.params.id);
        wallet.balance += req.body.amount;
        walletServices.updateWallet(req.params.id, wallet);
        let reqObj = {...req.body};
        reqObj['wallet_id'] = wallet;
        reqObj['type'] = req.body.amount > 0 ? 'Credit' : 'Debit';
        const transaction = await transactionServices.createTransaction(reqObj);
        res.status(200).json({data: transaction});
    }catch(ex){
        res.status(500).json({ error: err.message });
    }
}

exports.getTransactionById = async (req,res) => {
    try{
        const transaction = await transactionServices.getTransactionById(req.params.id);
        res.status(200).json({data: transaction});
    }catch(ex){
        res.status(500).json({ error: err.message });
    }
}