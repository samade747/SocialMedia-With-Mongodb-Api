// import express from "express";
// const userRoute = express.Router()

// userRoute.get("/", (req, res)=>{
//     res.send('hey its user routes')
// })











// export default userRoute;


// User route
import express from "express";
const userRoute = express.Router();

// Define user route handlers
userRoute.get("/", (req, res) => {
    res.send('hey its user routes');
});

export default userRoute;
