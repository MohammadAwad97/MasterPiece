const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  getStoreProducts,
  getCategoryProducts,
} = require("../controllers/productControllers");

//get all products by storeId:
router.route("/:storeId").get(getStoreProducts);
router.route("/cate/:cateId").get(getCategoryProducts);

//get all products and post:
router.route("/").get(getAllProducts).post(createProduct);

router.route("/:id").get(getProduct).patch(updateProduct).delete(deleteProduct);

module.exports = router;
