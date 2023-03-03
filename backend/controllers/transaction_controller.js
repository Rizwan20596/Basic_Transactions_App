const transactionServices = require('../services/transaction_services');

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
        const transaction = await transactionServices.createTransaction(req.body);
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