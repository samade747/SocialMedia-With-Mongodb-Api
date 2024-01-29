// Import the dotenv module for loading environment variables
import dotenv from 'dotenv'

// Import the mongoose library for MongoDB interaction
import mongoose from 'mongoose'

// Load environment variables from a .env file into process.env
dotenv.config()

// Define a function named dbConnection using async/await for handling MongoDB connection
export const dbConnection = async () => {
    try {
        // Attempt to establish a connection to the MongoDB database using the URI from the environment variables
        const con = await mongoose.connect(process.env.MONGO_URL);

        // If the connection is successful, log a message indicating the connection host
        console.log(`MongoDB Connected: ${con.connection.host}`);
    } catch (error) {
        // If an error occurs during the connection attempt, log the error
        console.log(error);
    }
}
