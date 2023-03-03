const express = require("express");
const { getAllWallets, getWalletById, createWallet} = require('../controllers/wallet_controller');
 
const router = express.Router();
 
router.route("/").get(getAllWallets);
router.route('/setup').post(createWallet);
router.route("/:id").get(getWalletById);
 
module.exports = router;