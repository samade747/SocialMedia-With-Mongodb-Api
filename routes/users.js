import express from "express";
const userRouter = express.Router()

userRouter.get("/", (req, res)=>{
    res.send('hey its user routes')
})











export default userRouter;