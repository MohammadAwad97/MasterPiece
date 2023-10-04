const { response } = require("express");
const Store = require("../models/storeModel");

exports.getAllStores = async (req, res) => {
  try {
    const stores = await Store.find();
    res.status(200).json({
      status: "success",
      results: stores.length,
      data: {
        stores,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getStore = async (req, res) => {
  console.log("HEY");
  console.log(req.params.id);
  try {
    const store = await Store.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        store,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "not found",
      message: err,
    });
  }
};

exports.createStore = async (req, res) => {
  console.log(".kxdfvnk.zdsfvns.kzdfvns.kfvnjknszadf.kjansdfv.jk");
  console.log(req.body);
  try {
    const newStore = await Store.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        store: newStore,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.updateStore = async (req, res) => {
  console.log(req.body);
  try {
    //new: true, >> will return the store after updating
    const store = await Store.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    console.log(store);
    res.status(200).json({
      status: "success",
      data: {
        store,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.deleteStore = async (req, res) => {
  try {
    await Store.findByIdAndDelete(req.params.id);
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

//Login for store as an admin:

exports.logInStore = async (req, res) => {
  try {
    const { email, password } = req.body;
    //check if he provide info.
    if (!email || !password) {
      return res.status(400).json({
        status: "fail",
        message: "Please Provide your eamil and password",
      });
    }

    //check the validate with the DB:
    const store = await Store.findOne({ email });
    console.log(store);

    if (!store) {
      return res.status(404).json({
        status: "fail",
        mess: "Not found",
      });
    }

    //If Exists:
    if (!(password === store.password)) {
      return res.status(400).json({
        status: "fail",
        message: "Incorrect password",
      });
    }

    // const token = ??

    res.status(200).json({
      status: "success",
      data: {
        storeID: store._id,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
