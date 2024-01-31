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
