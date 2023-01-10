const express = require("express");
const router = express.Router();
const userRoute = require("../Routes/user");
const bookRoute = require("../Routes/book");
const path = require("path");
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../Views/index.html"));
});
router.use("/users", userRoute);
router.use("/books", bookRoute);

router.all("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../Views/404.html"));
});

module.exports = router;
