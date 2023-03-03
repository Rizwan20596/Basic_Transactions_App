const express = require("express");
const { getAllTransactions, getTransactionById, createTransaction} = require('../controllers/transaction_controller');
 
const router = express.Router();
 
router.route("/").get(getAllTransactions);
router.route('/transact/:walletId').post(createTransaction);
router.route("/:id").get(getTransactionById);

module.exports = router;