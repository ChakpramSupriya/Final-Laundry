import {
  bookdrycleanbyid,
  createBookdryclean,
  deleteBookdryclean,
  getBookdryclean,
  updateBookdryclean,
} from "../controller/bookdrycleanController.js";

import express from "express";

const route = express.Router();

route.post("/createdrycleanbook", createBookdryclean);
route.get("/getdrycleanbook", getBookdryclean);
route.get("/getonebookdrycleanbyid/:id", bookdrycleanbyid);
route.put("/updatebookdryclean/:id", updateBookdryclean);
route.delete("/deletebookdryclean/:id", deleteBookdryclean);
export default route;
