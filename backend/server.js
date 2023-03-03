const express = require("express");
const mongoose = require("mongoose");
const walletRouter = require("./routes/wallet_routes");
const transactionRoutes = require("./routes/transaction_routes");
const dotenv = require('dotenv');
const app = express();
dotenv.config();


//configure mongoose
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
).then(() => console.log('connected to mongo db')).catch((err) => { console.log(err) });

app.use(express.json()); 
app.use("/api/wallet", walletRouter);
app.use("/api/transactions", transactionRoutes);
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
 
module.exports = app;