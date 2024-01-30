import express from "express";
const userRoute = express.Router()

userRoute.get("/", (req, res)=>{
    res.send('hey its user routes')
})











export default userRoute;