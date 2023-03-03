const express = require("express");
const mongoose = require("mongoose");
const walletRouter = require("./routes/wallet_routes");
const transactionRoutes = require("./routes/transaction_routes");
const app = express();


//configure mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/HIGHLEVEL",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

app.use("/api/wallet", walletRouter);
app.use("/api/transactions", transactionRoutes);
app.use(express.json()); 
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
 
module.exports = app;