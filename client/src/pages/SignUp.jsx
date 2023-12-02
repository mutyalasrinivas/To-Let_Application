import React, { useState } from "react";

const SignUp=()=>{
    const [inputs,setInputs]=useState({});
    const [error,setError]=useState(null);


    const handleChange=(e)=>{
       setInputs({
        ...inputs,
        [e.target.name]:e.target.value
       })

    }

    console.log(inputs)
    const handleSubmit=async(e)=>{
        e.preventDefault()
     try{
        const res=await fetch('/user/signup',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(inputs)
        })
        const resData=await res.json()
        console.log(resData)
     }catch(err){
        setError(err.message);
        console.log(err)
     } 

    }
    return (
    <div>
         <h1>Signup</h1> 
         <form onSubmit={handleSubmit}>
             <input type="text" name="name" placeholder="Enter Your Name" onChange={handleChange}/>
             <input type="email" name="email" placeholder="Enter your Email" onChange={handleChange}/>
             <input type="password" name="password"placeholder="Password" onChange={handleChange}/>
             <button type="submit">Register</button>
         </form>
    </div>)
}

export default SignUp;