const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const transactionSchema = new Schema({
  wallet_id: [
    {type: Schema.Types.ObjectId, ref: 'Wallet'}
  ],
  amount: Number,
  balance: Number,
  description: String,
  updated_date: {
    type: Date,
    default: Date.now,
  },
  type: String,
});
 
module.exports = mongoose.model("Transaction", transactionSchema);