import mongoose,{ Schema } from "mongoose";

const listingSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    regularPrice:{
       type:Number,
       required:true
    },
    imageUrl:{
        type:Array,
        default:'https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg'
    },
    bedrooms:{
        type:Number,
        required:true
    },
    bathrooms:{
        type:Number,
        required:true
    },
    discountPrice:{
        type:Number,
        required:true
    },
    parking:{
        type:Boolean,
        required:true
    },
    furnished:{
        type:Boolean,
        required:true
    },
    offer:{
        type:Boolean,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    userRef:{
         type:String,
         required:true
    }
},{timestamps:true})

export default mongoose.model('Listing',listingSchema)
