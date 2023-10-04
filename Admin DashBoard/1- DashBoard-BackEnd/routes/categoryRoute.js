const express = require("express");
const router = express.Router();

const {
  createCategory,
  getAllCategories,
  getOneCategories,
  deleteCategory,
} = require("../controllers/categoryController");

//Create category:
router.route("/").post(createCategory).get(getAllCategories);

//Get one cate:
router.route("/:id").get(getOneCategories).delete(deleteCategory);

module.exports = router;
