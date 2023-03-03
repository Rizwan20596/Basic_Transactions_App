const express = require("express");
const { getAllTransactions, getTransactionById, createTransaction,getTransactionsByWalletId} = require('../controllers/transaction_controller');
 
const router = express.Router();
 
router.route("/").get(getAllTransactions);
router.route('/transact/:walletId').post(createTransaction);
router.route("/:id").get(getTransactionById);
router.route("/wallet/:walletId").get(getTransactionsByWalletId);

module.exports = router;