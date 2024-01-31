// import express from "express";
// const userRoute = express.Router()

import express from "express";
import { deleteUserController, followUserController, getUserController, getUsersController, unFollowUserController, updateUserController } from "../controllers/usersControllers.js";
const userRoute = express.Router();

// update user
userRoute.put("/:id", updateUserController);
// delete user
userRoute.delete("/:id", deleteUserController);
// // get a user
userRoute.get("/:id", getUserController);
// // get all users
userRoute.get("/", getUsersController);
// // follow a user
userRoute.put("/:id/follow", followUserController);
// // unfollow a user
userRoute.put("/:id/unfollow", unFollowUserController);

export default userRoute;








