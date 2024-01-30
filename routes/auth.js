import express from "express";
import { loginController, registerController } from "../controllers/authControllers.js";
import users from "../models/Users.js"


const authRoute = express.Router()

authRoute.post("/register", registerController);











export default authRoute;