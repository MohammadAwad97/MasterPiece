const Product = require("../models/productModel");
const ApiFeatures = require("../utils/apiFeatures");

//Create product:
exports.createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        product: newProduct,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

// Get all products:

exports.getAllProducts = async (req, res) => {
  try {
    const features = new ApiFeatures(Product, req.query)
      .filter()
      .sort()
      .pagination();
    const products = await features.query.populate("storeId");
    const count = await Product.countDocuments();
    res.status(200).json({
      status: "success",
      count,
      resultNum: products.length,
      products,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

//Get one product:

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        product,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

//Update product:
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(201).json({
      status: "success",
      data: {
        product,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

//Delete product:

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

//Get store's products:
exports.getStoreProducts = async (req, res) => {
  const storeId = req.params.storeId;
  try {
    const storeProducts = await Product.find({ storeId });
    console.log(req.params);

    res.status(200).json({
      status: "success",
      result: storeProducts.length,
      data: {
        storeProducts,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

//Get Cate's products:
exports.getCategoryProducts = async (req, res) => {
  const cateId = req.params.cateId;
  try {
    const cateProducts = await Product.find({ cateId }).populate("storeId");
    console.log(req.params, "yessssssss");

    res.status(200).json({
      status: "success",
      result: cateProducts.length,
      data: {
        cateProducts,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
