import mongoose from 'mongoose'
import { databaseName } from '../constant.js';  

const connectDB=async()=>{
    try {
        const response=await mongoose.connect(`${process.env.MONGODB_URI}/${databaseName}`)
        console.log(`\nMongoDB connected !! DB HOST: ${response.connection.host}`)
    } catch (error) {
        console.log("MONGODB Connection Failed : ",error)
        process.exit(1)
    }
}

export default connectDB;