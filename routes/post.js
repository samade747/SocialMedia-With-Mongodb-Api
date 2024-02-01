import express from "express"
const postRoute = express.Router();

import { createPostController, deletePostController, getPostController, getPostsByTimeController, likePostController, updatePostController } from "../controllers/postsControllers.js";

// create a post
postRoute.post('/', createPostController)

//update a post
postRoute.put('/:id', updatePostController)

// delete a post
postRoute.delete('/:id', deletePostController)

// like a posts
postRoute.put('/:id/like', likePostController)

// get a post
postRoute.get('/:id', getPostController)

// get main timeline posts
postRoute.get('/timeline/all', getPostsByTimeController)


export default postRoute;
