import express from'express';
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
 
const app=express();

mongoose.connect(process.env.MONGO_URI)
       .then(()=>{
         
        console.log("Database Connected.....")
       }).catch(err=>console.log(err))
       app.listen(3000,()=>console.log("server running on 3000"))

 