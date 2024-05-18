import {
  bookassistancebyid,
  createBookassistance,
  deleteBookassistance,
  getBookassistance,
  updateBookassistance,
} from "../controller/bookassistanceController.js";

import express from "express";

const route = express.Router();

route.post("/createassistancebook", createBookassistance);
route.get("/getassistancebook", getBookassistance);
route.get("/getonebookassistancebyid/:id", bookassistancebyid);
route.put("/updatebookassistance/:id", updateBookassistance);
route.delete("/deletebookassistance/:id", deleteBookassistance);
export default route;
