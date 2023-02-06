import React from 'react'
import "../Register/register.css"
function Register() {
  return (
    <div className="register">
      <span className="heading">Register</span>
      <form className="form">
        <label>Username</label>
        <input className="input" type="text" placeholder="Enter your name" />
        <label>Email</label>
        <input className="input" type="text" placeholder="Enter your email" />
        <label>Password</label>
        <input className="input" type="password" placeholder="Enter your password" />
        <button className="regbutton">Register</button>
      </form>

      <button className="loginButton"><a className="link" href="/login">Login</a></button>





    </div>
  )
}

export default Register
