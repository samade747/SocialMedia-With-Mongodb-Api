import express from "express";

import mongoose from "mongoose";
import helmet from "helmet";
import morgan from "morgan";

import dotenv from "dotenv";

import { dbConnection } from './utils/config.js'

const app = express()
dotenv.config();
app.use(express.json())
dbConnection()

app.listen(process.env.PORT, () => {
    // Log a message indicating the port the server is listening on
    console.log(`Server is working on port number ${process.env.PORT}`)
}) 
