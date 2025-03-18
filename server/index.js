const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/FixMyTown");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});

app.use("/", (req, res) => {
  res.send("This is Your Home Page");
});
