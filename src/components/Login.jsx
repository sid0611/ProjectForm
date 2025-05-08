import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom";

function Login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const emailChange=(e)=>{
        setEmail(e.target.value);
    }
    const passChange=(e)=>{
        setPassword(e.target.value);

    }
    const handleSubmit=(e)=>{
        // console.log("Email: ",email);
        // console.log("Password: ",password);
        alert("Form submitted successfully!");
    }
  return (
    <form onSubmit={handleSubmit} type="submit">
        <h3>Email Id:</h3>
        <input type="text" placeholder={"Enter your email"} onChange={emailChange} value={email}/>
        <h3>Password:</h3>
        <input type="password" placeholder={"Enter your password"}  onChange={passChange} value={password}/>
        <button  >Login</button>
        <Link to="/about">Go to Signup</Link>
      
    </form>
  )
}

export default Login


