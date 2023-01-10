const mongoose = require("mongoose");
const { Schema } = mongoose;

const auth = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Auth = mongoose.model("user", auth);
module.exports = Auth;
