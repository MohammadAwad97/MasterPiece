const express = require("express");
const router = express.Router();

const {
  createAdmin,
  getAdmin,
  logInAdmin,
} = require("../controllers/adminControllers");

//1)) Create new admin :
router.route("/").post(createAdmin);

router.route("/:id").get(getAdmin);

//2))LogIn admin :
router.route("/Login").post(logInAdmin);

module.exports = router;
