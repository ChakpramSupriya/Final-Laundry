import bookdrycleanModel from "../model/bookdrycleanModel.js";

// create
const createBookdryclean = async (req, res) => {
  try {
    const info = req.body;
    console.log(info);
    const bookdrycleancreate = await bookdrycleanModel.create(info);
    res.status(201).json({
      success: true,
      message: "Booking is successfull",
      bookdrycleancreate,
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
const getBookdryclean = async (req, res) => {
  try {
    const bookdrycleanget = await bookdrycleanModel.find();
    res.status(201).json({
      success: true,
      message: "Get all booked users successfully",
      bookdrycleanget,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// // find one user by id
const bookdrycleanbyid = async (req, res) => {
  try {
    const id = req.params.id;
    const getonebookdryclean = await bookdrycleanModel.findById(id);
    res.status(201).json({
      success: true,
      message: "Get one booked user successfully",
      getonebookdryclean,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// // update
const updateBookdryclean = async (req, res) => {
  try {
    const id = req.params.id;
    const info = req.body;
    const updatebookdryclean = await bookdrycleanModel.findByIdAndUpdate(
      id,
      info,
      {
        new: true,
      }
    );
    res.status(201).json({
      success: true,
      message: "Update booked is successfull",
      updatebookdryclean,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// // delete
const deleteBookdryclean = async (req, res) => {
  try {
    const id = req.params.id;
    const deletebookdryclean = await bookdrycleanModel.findByIdAndDelete(id);
    res.status(201).json({
      success: true,
      message: "Delete successfully",
      deletebookdryclean,
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
  createBookdryclean,
  getBookdryclean,
  bookdrycleanbyid,
  updateBookdryclean,
  deleteBookdryclean,
};
