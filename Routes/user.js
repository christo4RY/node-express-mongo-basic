const express = require("express");
const UserController = require("../Controllers/users");
const router = express.Router();
const uploadFile = require("../Helper/upload");

router.post("/signup", uploadFile.multipleFileUpload, UserController.signup);
// router.post("/signup", UserController.signup);
router.post("/login", UserController.login);
module.exports = router;
