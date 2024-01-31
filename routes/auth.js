// import express from "express";
// import { registerController } from "../controllers/authControllers.js";
// import users from "../models/Users.js"


// const authRoute = express.Router()

// authRoute.post("/register", registerController);











// export default authRoute;

// Authentication route
import express from "express";
import { registerController, loginController } from "../controllers/authControllers.js";

const authRoute = express.Router();

// Define authentication route handlers
authRoute.post("/register", registerController);
authRoute.post("/login", loginController);

export default authRoute;
