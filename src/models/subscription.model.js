import mongoose, { Schema, Types } from "mongoose";

const subscriptionSchema = new Schema({
    subsriber:{
        type:Schema.Types.ObjectId,  //& one who is subscribing
        ref:"User"
    },
    channel:{
       type:Schema.Types.ObjectId, //& one to whom 'subscriber' is suscribing
       ref:"User"
    }
 
},
    { timestamps: true }
)

export const Subscription = mongoose.model("Subscription", subscriptionSchema)