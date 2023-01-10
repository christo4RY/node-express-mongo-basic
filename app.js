require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.json());
const router = require("./routes/index");
const connectDB = require("./database/index");
app.set("view engine", "pug");

app.use(router);

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`server is running at http://localhost:${process.env.PORT}`);
  });
});
