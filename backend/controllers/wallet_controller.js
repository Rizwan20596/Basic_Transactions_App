const walletServices = require('../services/wallet_services');

exports.getAllWallets = async (req,res) => {
    try{
        const wallets = await walletServices.getAllWallets();
        res.status(200).json({data: transactions});
    }catch(ex){
        res.status(500).json({ error: err.message });
    }
}

exports.createWallet = async (req,res) => {
    try{
        const transaction = await walletServices.createWallet(req.body);
        res.status(200).json({data: transaction});
    }catch(ex){
        res.status(500).json({ error: err.message });
    }
}

exports.getWalletById = async (req,res) => {
    try{
        const transaction = await walletServices.getWalletById(req.params.id);
        res.status(200).json({data: transaction});
    }catch(ex){
        res.status(500).json({ error: err.message });
    }
}