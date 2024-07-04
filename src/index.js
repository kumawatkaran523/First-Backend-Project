// require('dotenv').config({path:"./env"})

import mongoose from "mongoose"
import { databaseName } from "./constant.js";  
import dotenv from "dotenv"
import connectDB from "./db/dbConnect.js";
import app from "./app.js";

// ~Second Approach

dotenv.config({
    path:"./env"
})

connectDB()
.then(()=>{
    app.on('error',()=>{
        console.log("Error : ",error)
    })
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running on PORT ${process.env.PORT || 8000}`)
    })
})
.catch((error)=>{
    console.log("MongoDB connection Failed")
})


//~ First Approach
/*
import express from 'express'
const app=express()

;(async()=>{
    try {
        const response=await mongoose.connect(`${process.env.MONGODB_URI}/${databaseName}`)
        app.on("error",(e)=>{
            console.log("Error :",e)
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.log("Error : ",error)
    }
})()
*/