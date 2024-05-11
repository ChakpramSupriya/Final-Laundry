import mongoose from "mongoose";
const mongodb = () => {
  mongoose.connect("mongodb://localhost:27017/laundry");

  mongoose.connection.on("open", () => {
    console.log("Database is connected");
  });
  mongoose.connection.on("error", (err) => {
    console.log(err);
  });
};

export default mongodb;
