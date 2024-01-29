import express from "express";
const authRoute = express.Router()

authRoute.get("/", (req, res)=>{
    res.send('hey its user routes')
})











export default authRouter;