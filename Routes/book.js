const express = require("express");
const books = require("./../Controllers/books");
const auth = require("../Middlewares/auth");
const router = express.Router();
router
  .use(auth)
  .get("/", books.index)
  .post("/", books.store)
  .route("/:id")
  .get(books.create)
  .patch(books.update)
  .delete(books.destroy);

module.exports = router;
