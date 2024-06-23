import drycleanModel from "../model/drycleanModel.js";

// create
const createDryclean = async (req, res) => {
  try {
    const info = req.body;
    //   fullname: name,
    //   age,
    //   email,
    //   phonenumber: phone,
    //   address: add,
    //   pincode: pin,
    //   district: dis,
    //   aadhaarnumber: adhar,
    //   gender: gen,
    //   date,
    // };
    const {
      fullname,
      age,
      email,
      phonenumber,
      address,
      pincode,
      district,
      aadhaarnumber,
      gender,
      date,
    } = info;

    if (
      !fullname ||
      !age ||
      !phonenumber ||
      !address ||
      !pincode ||
      !district ||
      !aadhaarnumber ||
      !gender ||
      !date ||
      !email
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const dryclean = await drycleanModel.create(info);
    res.status(201).json({
      success: true,
      message: "Apply is successfull",
      dryclean,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
// get
const getdryclean = async (req, res) => {
  try {
    const appliedUsers = await drycleanModel.find();
    res.status(201).json({
      success: true,
      message: "Get all users successfully",
      appliedUsers,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// find one user by id
const getdrycleanbyid = async (req, res) => {
  try {
    const id = req.params.id;
    const getonedryclean = await drycleanModel.findById(id);
    res.status(201).json({
      success: true,
      message: "Get one user successfully",
      getonedryclean,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// update
const updatedryclean = async (req, res) => {
  try {
    const id = req.params.id;
    const info = req.body;
    const updatedryclean = await drycleanModel.findByIdAndUpdate(id, info, {
      new: true,
    });
    res.status(201).json({
      success: true,
      message: "Update successfully",
      updatedryclean,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// delete
const deletedryclean = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedryclean = await drycleanModel.findByIdAndDelete(id);
    res.status(201).json({
      success: true,
      message: "Delete successfully",
      deletedryclean,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export {
  createDryclean,
  getdryclean,
  getdrycleanbyid,
  updatedryclean,
  deletedryclean,
};
