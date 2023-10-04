const express = require("express");
const router = express.Router();
const {
  getAllStores,
  createStore,
  getStore,
  updateStore,
  deleteStore,
  logInStore
} = require("../controllers/storeControllers");

//LogIn: 
router.route("/Login").post(logInStore)

//Get all stores:
router.route("/").get(getAllStores).post(createStore);

router.route("/:id").get(getStore).patch(updateStore).delete(deleteStore);

module.exports = router;
