import express from "express";
import { loginUser, registerUser } from "../controller/userRegistration.js";
const route = express.Router();

route.post("/registration", registerUser); // /user/registrationapp
route.post("/login", loginUser);
export default route;
