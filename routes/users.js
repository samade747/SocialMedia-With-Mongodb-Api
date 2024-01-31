// import express from "express";
// const userRoute = express.Router()

import express from "express";
import { deleteUserController, followUserController, getUserController, getUsersController, unFollowUserController, updateUserController } from "../controllers/usersControllers.js";
const userRouter = express.Router();










// export default userRoute;


// User route
import express from "express";
const userRoute = express.Router();

// Define user route handlers
userRoute.get("/", (req, res) => {
    res.send('hey its user routes');
});

export default userRoute;
