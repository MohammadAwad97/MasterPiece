const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
  logInUser,
} = require("../controllers/userControllers");

router.route("/").get(getAllUsers).post(createUser);

router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

//Login:
router.route("/login").post(logInUser);

module.exports = router;

//1) Products Done
//2))Stores Done
//3))users Done
//4))category.
