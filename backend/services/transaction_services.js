const TransactionModel = require("../models/transaction");
 
exports.getAllTransactions = async () => {
  return await TransactionModel.find();
};
 
exports.createTransaction = async (wallet) => {
  return await TransactionModel.create(wallet);
};
exports.getTransactionById = async (id) => {
  return await TransactionModel.findById(id);
}; 