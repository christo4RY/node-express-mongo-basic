const jwt = require("jsonwebtoken");
const { ObjectId } = require("mongodb");
const User = require("../Model/auth");
const auth = async (req, res, next) => {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[1]
  ) {
    const token = req.headers.authorization.split(" ")[1];
    try {
      const decode = await jwt.verify(token, "jwt-user-secret");
      const user = await User.findOne({ _id: ObjectId(decode.user._id) });
      if (!user) {
        res.status(404).json({
          msg: "user not found",
        });
        return;
      }
      next();
    } catch (error) {
      res.status(404).json(error);
    }
  }
};
module.exports = auth;
