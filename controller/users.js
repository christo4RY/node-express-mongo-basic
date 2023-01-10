const User = require("../Model/auth");
const apiMsg = require("../Helper/function");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;

const signup = async (req, res) => {
  try {
    let password = await bcrypt.hash(req.body.password, saltRounds);
    await User.create({ ...req.body, password });
    res.status(200).json(apiMsg("Successfully", await User.find()));
  } catch (err) {
    res.json(apiMsg("email already exist"));
  }
};

const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(404).json(apiMsg("user not found"));
  }

  if (!(await bcrypt.compare(req.body.password, user.password))) {
    return res.status(404).json(apiMsg("user not found"));
  }

  const token = jwt.sign({ user }, "jwt-user-secret");
  res.status(200).json(
    apiMsg("Login Successfully", {
      user,
      _token: token,
    })
  );
};

module.exports = {
  signup,
  login,
};
