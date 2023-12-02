import express from 'express';
import dotenv from 'dotenv'; 
import mongoose from 'mongoose';

import authRouter from './routes/auth_routes.js'

 dotenv.config();
const app=express();
 
app.use(express.json())
app.use('/user',authRouter);


  mongoose.connect(process.env.MONGO_URI)
       .then(()=>{
        console.log("Database Connected.....")
       }).catch(err=>console.log(err))
 
app.use((err,req,res,next)=>{
  const message=err.message||"something went wrong"
  const statusCode=err.statusCode||500
  return res.status(statusCode).json({
    success:false,
    message,
    statusCode
  })

}) 

app.listen(3000,()=>console.log("server running on 3000"))
 
 

 