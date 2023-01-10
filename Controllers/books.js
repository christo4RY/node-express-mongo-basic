const { ObjectId } = require("mongodb");
const allBooks = require("../Model/book");
const apiMsg = require("../Helper/function");

const index = async (req, res, next) => {
  res.status(200).json(apiMsg("Successfully", await allBooks.find()));
};

const create = async (req, res, next) => {
  let book = await allBooks.find({ _id: ObjectId(req.params.id) });
  res.status(200).json(apiMsg("Successfully", book));
};

const store = async (req, res, next) => {
  try {
    await allBooks.create(req.body);
    res.json(apiMsg("Successfully", await allBooks.find()));
  } catch (err) {
    res.json(apiMsg("Error", err._message));
  }
};

const update = async (req, res, next) => {
  const book = await allBooks.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.status(200).json(apiMsg("Successfully", book));
};

const destroy = async (req, res, next) => {
  await allBooks.deleteOne({
    _id: req.params.id,
  });
  res.status(200).json(apiMsg("Successfully", await allBooks.find()));
};

module.exports = {
  index,
  store,
  create,
  update,
  destroy,
};
