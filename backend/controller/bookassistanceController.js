import bookassistanceModel from "../model/bookassistanceModel.js";

// create
const createBookassistance = async (req, res) => {
  try {
    const info = req.body;
    console.log(info);
    const bookassistancecreate = await bookassistanceModel.create(info);
    res.status(201).json({
      success: true,
      message: "Booking is successfull",
      bookassistancecreate,
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
const getBookassistance = async (req, res) => {
  try {
    const bookassistanceget = await bookassistanceModel.find();
    res.status(201).json({
      success: true,
      message: "Get all booked users successfully",
      bookassistanceget,
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
const bookassistancebyid = async (req, res) => {
  try {
    const id = req.params.id;
    const getonebookassistance = await bookassistanceModel.findById(id);
    res.status(201).json({
      success: true,
      message: "Get one booked user successfully",
      getonebookassistance,
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
const updateBookassistance = async (req, res) => {
  try {
    const id = req.params.id;
    const info = req.body;
    const updatebookassistance = await bookassistanceModel.findByIdAndUpdate(
      id,
      info,
      {
        new: true,
      }
    );
    res.status(201).json({
      success: true,
      message: "Update booked is successfull",
      updatebookassistance,
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
const deleteBookassistance = async (req, res) => {
  try {
    const id = req.params.id;
    const deletebookassistance = await bookassistanceModel.findByIdAndDelete(
      id
    );
    res.status(201).json({
      success: true,
      message: "Delete successfully",
      deletebookassistance,
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
  createBookassistance,
  getBookassistance,
  bookassistancebyid,
  updateBookassistance,
  deleteBookassistance,
};
