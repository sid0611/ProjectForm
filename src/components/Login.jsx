import React from 'react'
import { useState } from 'react'

function Login() {
    const [email,setEmail]=new useState('Enter your email');
  return (
    <form>
        <h3>Email Id:</h3>
        <input type="text" placeholder={email}/>
        <h3>Password:</h3>
        <input type="password" />
      
    </form>
  )
}

export default Login
