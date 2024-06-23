import assistanceModel from "../model/assistanceModel.js";

// create
const createAssistance = async (req, res) => {
  try {
    const info = req.body;
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
      serviceavailable,
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
      !email ||
      !serviceavailable
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    console.log(info);
    const assistancecreate = await assistanceModel.create(info);
    res.status(201).json({
      success: true,
      message: "Assistance apply is successfull",
      assistancecreate,
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
const getAssistance = async (req, res) => {
  try {
    const assistanceget = await assistanceModel.find();
    res.status(201).json({
      success: true,
      message: "Get all assistance users successfully",
      assistanceget,
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
const assistancebyid = async (req, res) => {
  try {
    const id = req.params.id;
    const getoneassistance = await assistanceModel.findById(id);
    res.status(201).json({
      success: true,
      message: "Get one assistance user successfully",
      getoneassistance,
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
const updateAssistance = async (req, res) => {
  try {
    const id = req.params.id;
    const info = req.body;
    const updateassistance = await assistanceModel.findByIdAndUpdate(id, info, {
      new: true,
    });
    res.status(201).json({
      success: true,
      message: "Update  successfully",
      updateassistance,
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
const deleteAssistance = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteassistance = await assistanceModel.findByIdAndDelete(id);
    res.status(201).json({
      success: true,
      message: "Delete successfully",
      deleteassistance,
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
  createAssistance,
  getAssistance,
  assistancebyid,
  updateAssistance,
  deleteAssistance,
};
