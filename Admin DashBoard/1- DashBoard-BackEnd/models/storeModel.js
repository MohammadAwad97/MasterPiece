const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must enter the name of the store"],
    unique: true,
  },
  phone: {
    type: String,
    required: [true, "Please enter phone number"],
    unique: true,
  },

  email: {
    type: String,
    required: [true, "please provide an eamil for the store"],
    unique: true,
  },

  password: {
    type: String,
    required: [true, "please enter your password"],
  },

  Adress: {
    type: String,
  },
});

const Store = mongoose.model("store", storeSchema);

module.exports = Store;
