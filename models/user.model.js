const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  login: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  role: {
      type: String,
      default: 'User'
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
