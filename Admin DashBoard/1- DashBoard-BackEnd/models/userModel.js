const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must enter the customer name"],
    unique: true,
  },

  gender: {
    type: String,
    // required: [true, "Please select your gender"],
  },

  email: {
    type: String,
    required: [true, "Please provide your email"],
    lowercase: true,
    unique: true,
  },

  password: {
    type: String,
    required: [true, "Please enter your password"],
    min: 8,
  },

  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
