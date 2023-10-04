const Category = require("../models/categoryModel");
const ApiFeatures = require("../utils/apiFeatures");

exports.createCategory = async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json({
      data: {
        category: newCategory,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "not found",
      message: err,
    });
  }
};

exports.getAllCategories = async (req, res) => {
  try {
    const features = new ApiFeatures(Category, req.query)
      .filter()
      .sort()
      .pagination();
    const categories = await features.query;
    const count = await Category.countDocuments();
    res.status(200).json({
      status: "success",
      count,
      resultNum: categories.length,
      categories,
    });
  } catch (err) {
    res.status(404).json({
      status: "not found",
      message: err,
    });
  }
};

exports.getOneCategories = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        category,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "not found",
      message: err,
    });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
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
