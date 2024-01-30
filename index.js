// import express from "express";

// import mongoose from "mongoose";
// import helmet from "helmet";
// import morgan from "morgan";

// import dotenv from "dotenv";
// import userRoute from "./routes/users.js";
// import authRoute from "./routes/auth.js";


// import { dbConnection } from './utils/config.js'


// const app = express()
// dotenv.config();
// dbConnection()

// // middlware
// app.use(express.json())
// app.use(helmet())
// app.use(morgan('common'))

// app.use("/api/users", userRoute)
// app.use("/api/auth", authRoute)

// app.listen(process.env.PORT, () => {
//     // Log a message indicating the port the server is listening on
//     console.log(`Server is working on port number ${process.env.PORT}`)
// }) 

// Import necessary packages
import express from "express";
import mongoose from "mongoose";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

// Import routes
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";

// Import database connection function
import { dbConnection } from './utils/config.js';

// Initialize Express app
const app = express();

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB database
dbConnection();

// Middleware setup
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

// Routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

// Start server
app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port number ${process.env.PORT}`);
});

