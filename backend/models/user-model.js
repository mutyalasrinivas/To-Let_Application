import mongoose,{Schema} from "mongoose";


const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
      type:String,
      required:true,
      unique:true,
      trim:true
    },
    password:{
        type:String,
        required:true,
        minlength:6,
        trim:true
     },
     avatar:{
        type:String,
        default:"https://cdn-icons-png.flaticon.com/512/3607/3607444.png"
     }
},{
    timestamps:true
})

export default mongoose.model('User',userSchema)