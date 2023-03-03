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

exports.getTransactionsByWalletId = async (id) => {
  let allTrans = await TransactionModel.find();
  return allTrans.filter(trans => trans.wallet_id.includes(id));
}; 