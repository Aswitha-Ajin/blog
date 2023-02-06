import React from 'react'
import "../Login/login.css"
function Login() {
  return (
   
    <div className="login">
    <span className="title">Login</span>
    <form className="form">
      <label className='forms1'><b>Email</b></label>
      <input className="input" type="text" placeholder="Enter your email" />
      <label className='forms1'><b>Password</b></label>
      <input className="input" type="password" placeholder="Enter your password" />
      <button className="loginbutton">Login</button>
    </form>
      <button className="regbuttons" >
  
  <a className="link" href="/register">Register</a>
  </button>
  </div>

  )
}

export default Login
