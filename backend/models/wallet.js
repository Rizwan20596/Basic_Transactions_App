const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const walletSchema = new Schema({
  balance: Number,
  name: String,
  created_date: {
    type: Date,
    default: Date.now,
  },
});
 
module.exports = mongoose.model("Wallet", walletSchema);