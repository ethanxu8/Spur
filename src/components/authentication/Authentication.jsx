import React from 'react'
import Login from "./Login"
import spurlogo from "../../assets/Spur_Logo.png"
import "./authentication.css"

function Authentication() {
  return (
    <div className="auth-container">
    <div className="auth-box">
          <img className="spur-title" src={spurlogo} alt="Spur Logo" />

        <p className="login-text">Have an account? <a href="#" className="login-link">Log in</a></p>
        <form>
          <div className="fillout__boxes">
            <input className="input-field" type="text" placeholder="Name/Organization" />
            <input className="input-field" type="email" placeholder="Email" />
            <input className="input-field" type="password" placeholder="Password"  />
          </div>
          <div className="signin__button">
          <button type="submit" className="submit-button">Sign Up!</button>
          </div>
        </form>
    </div>
    
</div>
  )
}

export default Authentication