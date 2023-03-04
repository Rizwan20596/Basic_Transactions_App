const WalletModel = require("../models/wallet");
 
exports.getAllWallets = async () => {
  return await WalletModel.find();
};
 
exports.createWallet = async (wallet) => {
  return await WalletModel.create(wallet);
};
exports.getWalletById = async (id) => {
  return await WalletModel.findById(id);
}; 

exports.updateWallet = async (id, wallet) => {
   return await WalletModel.findByIdAndUpdate(id, wallet);
}; 