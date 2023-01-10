require("dotenv").config();
const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`);
}

module.exports = connectDB;
