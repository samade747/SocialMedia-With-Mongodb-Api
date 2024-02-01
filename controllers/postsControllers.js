// import Users from "../models/Users.js";
import User from "../models/Users.js";
// import Post from "../models/post.js";
import { Post } from "../models/post.js";



// create a post 
export const createPostController = async (req, res) => {
    try {
        const newPost = new Post(req.body);
        const savePost = newPost.save();
        res.stats(200);
        res.json({
            status: true,
            message: "your post has been Created ",
            data: newPost,
        });
    } catch (error) {
        res.status(500);
        res.json({
            status: false,
            message: error.message,
        });
    }
};


// update a post
export const updatePostController = async (req, res) => {
    try {
      const { id } = req.params; // post id
      const { userId } = req.body; // logged in user id
  
      console.log(id);
  
      const post = await Post.findById(id);
  
      if (post.userId == userId) {
        const updatePost = await post.updateOne({ $set: req.body });
        res.status(200);
        res.json({
          status: true,
          message: "your post has been updated!",
        });
      } else {
        res.status(403);
        res.json({
          status: false,
          message: "you can update only your post!",
        });
      }
    } catch (error) {
      res.status(500);
      res.json({
        status: false,
        message: error.message,
      });
    }
  };


// delete a post
export const deletePostController = async (req, res) => {
    try {
      const { id } = req.params; // post id
      const { userId } = req.body; // logged in user id
  
      const post = await Post.findById(id);
  
      if (post.userId == userId) {
        const updatePost = await post.deleteOne();
        res.status(200);
        res.json({
          status: true,
          message: "your post has been deleted!",
        });
      } else {
        res.status(403);
        res.json({
          status: false,
          message: "you can delete only your post!",
        });
      }
    } catch (error) {
      res.status(500);
      res.json({
        status: false,
        message: error.message,
      });
    }
  };


// like a post
export const likePostController = async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id); // post id
      const { userId } = req.body; // logged in user
      const post = await Post.findById(id);
      console.log(post);
  
      if (!post.likes.includes(userId)) {
        await post.updateOne({ $push: { likes: userId } });
        res.status(200);
        res.json({
          status: true,
          message: "post has been liked sucessfully!",
        });
      } else {
        await post.updateOne({ $pull: { likes: userId } });
        res.status(200);
        res.json({
          status: true,
          message: "the post has been disliked successfully!",
        });
      }
    } catch (error) {
      res.status(500);
      res.json({
        status: false,
        message: error.message,
      });
    }
  };
  

// get a post
export const getPostController = async (req, res) => {
    try {
      const { id } = req.params;
      const post = await Post.findById(id);
  
      if (post) {
        res.status(200);
        res.json({
          status: true,
          message: "post fetched successfully!",
          data: post,
        });
      }
    } catch (error) {
      res.status(500);
      res.json({
        status: false,
        message: error.message,
      });
    }
  };
  

// get time line posts
export const getPostsByTimeController = async (req, res) => {
    try {
      const { userId } = req.body; // logged in user id
    const currentUser = await User.findById(userId); // getting logged in user
    // current user
    const loggedInUserPosts = await Post.find({ userId: currentUser._id }); // logged in user posts
    const followingUserPosts = await Promise.all(
      currentUser.followings.map((followingUserId) => {
        return Post.find({ userId: followingUserId });
      })          // following user posts
      ); 
      res.status(200);    
      res.json({
        status: true,
        messgae: "posts fetched successfully!",
        data: loggedInUserPosts.concat(...followingUserPosts),
      });  
    } catch (error) {
      res.status(500);
      res.json({
        status: false,
        messgae: error.message,
      });
    }  
  };