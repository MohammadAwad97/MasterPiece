const mongoose = require("mongoose");

//Create Schema:
const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must enter the name of the admin"],
  },

  email: {
    type: String,
    ref: "stores",
    required: [true, "Please Enter your email"],
    unique: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: [true, "Please enter your password"],
  },

  phoneNumber: {
    type: String,
    required: [true, "Please provide us your phone number"],
  },
  
  role: {
    type: String,
    required: [true, "Please enter the role"],
  },
});

const Admin = mongoose.model("admin", adminSchema);

module.exports = Admin;
