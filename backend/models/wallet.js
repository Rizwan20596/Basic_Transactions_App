const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const walletSchema = new Schema({
  balance:  {type: Number},
  name: String,
  created_date: {
    type: Date,
    default: new Date(),
  },
});
 
module.exports = mongoose.model("Wallet", walletSchema);