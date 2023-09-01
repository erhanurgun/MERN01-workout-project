import "dotenv/config";
import express from "express";

// controller function
import {loginUser, signupUser} from "../controllers/userController.js";

const router = express.Router();

// login route
router.post(process.env.BASE_URL + "/login", loginUser);

// signup route
router.post(process.env.BASE_URL + "/signup", signupUser);

export default router;