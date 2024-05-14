import {
  createDryclean,
  deletedryclean,
  getdryclean,
  getdrycleanbyid,
  updatedryclean,
} from "../controller/drycleanController.js";
import express from "express";

const route = express.Router();

route.post("/createDryclean", createDryclean);
route.get("/getdryclean", getdryclean);
route.get("/getonebyid/:id", getdrycleanbyid);
route.put("/updatedryclean/:id", updatedryclean);
route.delete("/deletedryclean/:id", deletedryclean);
export default route;
