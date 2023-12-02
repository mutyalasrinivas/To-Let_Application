import User from '../models/user-model.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { errorHandler } from '../utils/error.js';

 export const signUp=async(req,res,next)=>{
    const {name ,email,password}=req.body;
    if(!name || !email|| !password){
        return res.status(400).json({message:"input details are missing.."})
    }
    const hashPassword=bcryptjs.hashSync(password,10)
    try{
      const existingUser=await User.findOne({email})
      if(existingUser) return next(errorHandler(403,'user Already Existed please Login..'))
    const user=new User({
        name,
        email,
        password:hashPassword
    })
        await user.save();
        res.status(200).json({message:"user created succesfully"})
    }catch(err){
        console.log(err)
    }
}

export const signIn=async(req,res,next)=>{
    const {email,password}=req.body;
    try{
        const user=await User.findOne({email})
         if(!user){
            return next(errorHandler(404,'User not found'))
        }
        const isPasswordCorrect=bcryptjs.compareSync(password,user.password);
        if(!isPasswordCorrect) {
            return next(errorHandler(401,'wrong credentials'))
        }
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET);
        const {password:pass,...rest}=user._doc
        return res.cookie('token',token,{httpOnly:true}).status(200).json(rest)


    }catch(err){
        next(err)
        console.log(err)
    }
}


 