const mongoose = require("mongoose");

//Create Schema:
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must enter the name of the product"],
  },

  storeName: {
    type: String,
  },

  storeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "store",
    // required: true,
  },

  price: {
    type: String,
    required: [true, "Must enter the price"],
  },

  img: {
    type: String,
    // required: [true, "Must provide an image for the product"],
  },
  cate: {
    type: String,
    required: [true, "Must enter the category"],
  },
  cateId: {
    type: String,
    // required: [true, "Please provide the category Id"],
  },
  status: {
    type: String,
    default: "pending",
  },

  imgUrl: {
    type: String,
  },
  rating: {
    type: String,
    // required: [true, "please enter the rate"],
  },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
