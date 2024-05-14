import {
  assistancebyid,
  createAssistance,
  deleteAssistance,
  getAssistance,
  updateAssistance,
} from "../controller/assistanceController.js";

import express from "express";

const route = express.Router();

route.post("/createassistance", createAssistance);
route.get("/getassistance", getAssistance);
route.get("/getoneassistancebyid/:id", assistancebyid);
route.put("/updateassistance/:id", updateAssistance);
route.delete("/deleteassistance/:id", deleteAssistance);
export default route;
