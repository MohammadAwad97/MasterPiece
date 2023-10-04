const User = require("../models/userModel");
const ApiFeatures = require("../utils/apiFeatures");

//Create user:
exports.createUser = async (req, res) => {
  console.log("Created................");
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
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

// Get all users:
exports.getAllUsers = async (req, res) => {
  try {
    const features = new ApiFeatures(User, req.query)
      .filter()
      .sort()
      .pagination();
    const users = await features.query;
    const count = await User.count();
    res.status(200).json({
      status: "success",
      count,
      resultNum: users.length,
      users,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

//Get one user:
exports.getUser = async (req, res) => {
  console.log("HHHHHHHHHHHHHHHHHhi");
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

//Update user:
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true, // يعني لما يتعدل راح ترجع القيود يلي حطينها عليه في السكيما تتنفذ عليه من جديد
    });
    res.status(201).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

//Delete user:

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
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

//logIn user:
exports.logInUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    //Check if he enter the info:
    if (!email || !password) {
      return res.status(404).json({
        status: "fail",
        message: "Please provide your email and password",
      });
    }

    // if he enter the info.
    const user = await User.findOne({ email });
    console.log(user, "Yessssssssssss");

    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "Not found",
      });
    }

    //Chech the validation:

    if (password !== user.password) {
      return res.status(404).json({
        status: "fail",
        message: "Wrong Information",
      });
    }

    // if true:
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
