// import Users from "../models/Users.js";
import User from "../models/Users.js";
import bcrypt from "bcrypt";

export const updateUserController = async (req, res) =>{
    try {
        const { id } = req.params;

        if(req.body.userId === id || req.body.isAdmin){
            if(req.body.password){
                try {
                    const salt = await bcrypt.genSalt();
                    req.body.password = await bcrypt.hash(req.body.password, salt);
                } catch (error) {
                    res.status(500);
                    res.json(error);
                }
            }
            try {
                const updatedUser = await User.findByIdAndUpdate(id, {
                  $set: req.body,
                });
                res.status(200);
                res.json({
                  status: true,
                  message: "Your account has been updated!",
                });
              } catch (error) {
                res.status(500);
                res.json(error);
              }
            } else {
              res.status(403);
              res.json({
                status: false,
                message: "You can update only your account!",
              });
            }
          } catch (error) {
            res.status(500);
            res.json(error);
          }
        };

        export const deleteUserController = async (req, res) => {
          try {
            const { id } = req.params;
        
            if (req.body.userId === id || req.body.isAdmin) {
              try {
                const deleteUser = await User.findByIdAndDelete(id);
                res.status(200);
                res.json({
                  status: true,
                  message: "Your account has been Deleted!",
                });
              } catch (error) {
                res.status(500);
                res.json(error);
              }
            } else {
              res.status(403);
              res.json({
                status: false,
                message: "You can delete only your account!",
              });
            }
          } catch (error) {
            res.status(500);
            res.json(error);
          }
        };
        
        
        export const getUserController = async (req, res) => {
          try {
            const { id } = req.params;
        
            const isUserExists = await User.findById(id);
            const { password, updatedAt, ...others } = isUserExists._doc;
            res.status(200);
            res.json({
              status: true,
              message: "User fetched successfully!",
              data: others,
            });
          } catch (error) {
            res.status(500);
            res.json(error);
          }
        };
        
        
        export const getUsersController = async (req, res) => {
          try {
            const getUsers = await User.find();
            res.status(200);
            res.json({
              status: true,
              message: "User fetched successfully!",
              data: getUsers,
            });
          } catch (error) {
            res.status(500);
            res.json(error);
          }
        };
        
        
        export const followUserController = async (req, res) => {
          const { id } = req.params;
          if (req.body.userId !== id) {
            try {
              const user = await User.findById(id);
              const curretUser = await User.findById(req.body.userId);
        
              if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({ $push: { followers: req.body.userId } });
                await curretUser.updateOne({ $push: { followings: id } });
                res.status(200);
                res.json({
                  status: true,
                  message: "user has been followed!",
                });
              } else {
                res.status(403);
                res.json("you already follow this user!");
              }
            } catch (error) {
              res.status(500);
              res.json(error);
            }
          } else {
            res.status(403);
            res.json("You can't follow yourself!");
          }
        };
                         
        export const unFollowUserController = async (req, res) => {
          const { id } = req.params;
          if (req.body.userId !== id) {
            try {
              const user = await User.findById(id);
              const curretUser = await User.findById(req.body.userId);
        
              if (user.followers.includes(req.body.userId)) {
                await user.updateOne({ $pull: { followers: req.body.userId } });
                await curretUser.updateOne({ $pull: { followings: id } });
                res.status(200);
                res.json({
                  status: true,
                  message: "user has been unfollowed!",
                });
              } else {
                res.status(403);
                res.json({
                  status: false ,
                  message: "you are already unfollowing this user!" ,
                });
              }
            } catch (error) {
              res.status(500);
              res.json(error);
            }
          } else {
            res.status(403);
            res.json({
              status: false ,
              message: "You can't unfollow yourself!" ,
            });
          }
        };