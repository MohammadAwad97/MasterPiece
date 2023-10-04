const Admin = require("../models/adminModel");
const ApiFeatures = require("../utils/apiFeatures");

//1)) Create Admin:

exports.createAdmin = async (req, res, next) => {
  try {
    const newAdmin = await Admin.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        admin: newAdmin,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

//2)) LogIn Admin:
exports.logInAdmin = async (req, res) => {
  console.log(req.body);
  console.log("Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
  try {
    const { email, password } = req.body;
    //Check if he put the data
    if (!email || !password) {
      return res.status(400).json({
        message: "Please provide your email and password",
      });
    }

    //check if there is admin with this email:
    const admin = await Admin.findOne({ email }); // انتبه يا محمد هون لازم يكون فايند ون عشان ترجعلك اوبجكت , بس فايند لحالها بترجعلك مصفوفة
    console.log(admin);

    if (!admin) {
      return res.status(404).json({
        status: "fail",
        message: "Not found",
      });
    }

    //check password validation
    if (!(password === admin.password)) {
      return res.status(400).json({
        status: "fail",
        message: "password is not correct",
      });
    }

    //  If the admin enter the same password
    res.status(200).json({
      status: "success",
      data: {
        adminId: admin._id,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

//3)) get admin Id:

exports.getAdmin = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        admin,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "not found",
      message: err,
    });
  }
};
