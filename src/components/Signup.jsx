import React from 'react'
import { useState } from 'react';
function Signup() {
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [name,setName]=useState('');
    
    const nameChange=(e)=>{
      setName(e.target.value);
    }
    const emailChange=(e)=>{
      setEmail(e.target.value);
    }
    const passChange=(e)=>{
      setPassword(e.target.value);
    }
    const handleSubmit=(e)=>{
      e.preventDefault(); // Prevent the default form submission behavior
      console.log("Email:",email);
      console.log("Password:",password);
      console.log("Name:",name);

    }

  return (
    <>
        <form onSubmit={handleSubmit} type="submit">
          <h3>Email</h3>
          <input type="text" placeholder='Enter your Email here:' value={password} onChange={passChange}/>
          <h3>Password</h3>
          <input type="text" placeholder='Enter your password here:' value={email} onChange={emailChange}/>
          <h3>Name</h3>
          <input type="text" placeholder='Enter your Name Here:' value={name} onChange={nameChange}/>
          <button type='submit'>Signup</button>
        </form>
    </>
  )
}

export default Signup
