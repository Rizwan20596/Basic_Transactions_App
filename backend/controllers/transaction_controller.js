const transactionServices = require('../services/transaction_services');
const walletServices = require('../services/wallet_services');

exports.getAllTransactions = async (req,res) => {
    try{
        const transactions = await transactionServices.getAllTransactions();
        res.status(200).json({data: transactions, stauts: 200});
    }catch(err){
        res.status(500).json({ error: err.message });
    }
}

exports.createTransaction = async (req,res) => {
    try{
        const wallet = await walletServices.getWalletById(req.params.walletId);
        let bal =parseFloat( wallet.balance)+parseFloat(req.body.amount);
        wallet.balance = bal.toFixed(4);
        walletServices.updateWallet(req.params.walletId, wallet);
        let reqObj = {...req.body};
        reqObj['wallet_id'] = wallet;
        reqObj['balance'] = bal;
        reqObj['type'] = req.body.type || req.body.amount > 0 ? 'Credit' : 'Debit';
        const transaction = await transactionServices.createTransaction(reqObj);
        res.status(200).json({data: transaction, stauts: 200});
    }catch(err){
        res.status(500).json({ error: err.message });
    }
}

exports.getTransactionById = async (req,res) => {
    try{
        const transaction = await transactionServices.getTransactionById(req.params.id);
        res.status(200).json({data: transaction});
    }catch(err){
        res.status(500).json({ error: err.message, stauts: 200});
    }
}

exports.getTransactionsByWalletId = async (req,res) => {
    try{
        const transactions = await transactionServices.getTransactionsByWalletId(req.params.walletId);
        res.status(200).json({data: transactions, stauts: 200});
    }catch(err){
        res.status(500).json({ error: err.message });
    }
}