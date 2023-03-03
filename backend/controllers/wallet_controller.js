const walletServices = require('../services/wallet_services');

exports.getAllWallets = async (req,res) => {
    try{
        const wallets = await walletServices.getAllWallets();
        res.status(200).json({data: wallets, stauts: 200});
    }catch(err){
        res.status(500).json({ error: err.message });
    }
}

exports.createWallet = async (req,res) => {
    try{
        const wallet = await walletServices.createWallet(req.body);
        res.status(200).json({data: wallet, stauts: 200});
    }catch(err){
        res.status(500).json({ error: err.message });
    }
}

exports.getWalletById = async (req,res) => {
    try{
        const wallet = await walletServices.getWalletById(req.params.id);
        res.status(200).json({data: wallet, stauts: 200});
    }catch(err){
        res.status(500).json({ error: err.message });
    }
}