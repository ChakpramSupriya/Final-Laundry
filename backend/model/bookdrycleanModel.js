import mongoose from "mongoose";

const bookdryclean = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contactnumber: {
    type: Number,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
  },
  items: {
    type: Number,
    required: true,
  },
  productstype: [
    {
      type: String,
      required: true,
    },
  ],
  amount: {
    type: String,
    required: true,
  },
});

export default mongoose.model("bookdryclean", bookdryclean);
