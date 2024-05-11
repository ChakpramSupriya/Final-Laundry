import express from "express";
import { registerUser } from "../controller/userRegistration.js";
const router = express.Router();

router.post("/registration", registerUser); // /user/registrationapp

export default router;
