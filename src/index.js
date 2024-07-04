// require('dotenv').config({path:"./env"})

import mongoose from "mongoose"
import { databaseName } from "./constant.js";  
import dotenv from "dotenv"
import connectDB from "./db/dbConnect.js";
// ~Second Approach

dotenv.config({
    path:"./env"
})
connectDB()


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