const express = require("express");
const router = express.Router();
const userRoute = require("../routes/user");
const bookRoute = require("../routes/book");
const path = require("path");
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});
router.use("/users", userRoute);
router.use("/books", bookRoute);

router.all("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/404.html"));
});

module.exports = router;
