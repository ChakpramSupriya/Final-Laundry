import mongoose from "mongoose";

const assistance = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  aadhaarnumber: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  serviceavailable: {
    type: String,
    required: true,
  },
});

export default mongoose.model("assistance", assistance);
