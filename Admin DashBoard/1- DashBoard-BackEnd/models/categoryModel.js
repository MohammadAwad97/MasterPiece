const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must enter the category names"],
    unique: true,
  },
});

const Category = mongoose.model("category", categorySchema);

module.exports = Category;
