require("dotenv").config();

const express = require("express");
const upload = require("express-fileupload");
const app = express();
app.use(express.json());
const router = require("./Routes/index");
const connectDB = require("./Database/index");
app.set("view engine", "pug");

app.use(upload());
app.use(router);
connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`server is running at http://localhost:${process.env.PORT}`);
  });
});
