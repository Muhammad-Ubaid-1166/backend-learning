// require('dotenv').config({path: './env'}) // Inconsistency
import dotenv from 'dotenv'


import mongoose from "mongoose";

import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB() // DATABASE FUNCTION EXECUTE




.then(() =>{
    app.listen(process.env.PORT || 8000)
        console.log(`Server is running at port : ${process.env.PORT}`)
})
.catch((error) =>{
    console.log("MONGO db connection failed !!!", err);
    
})

// Frits Approach
/*
import express from "express";

const app = express();

(async () =>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.error("Error in MongoDB connection:", error);
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`App is listning on port ${process.env.PORT}`);
        });
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
})()
*/