import { useState } from "react"
import React from 'react'
import spurlogo from "../../assets/Spur_Logo.png"
import "./login.css"

import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase"

function Login({ setActive }) {
  const [email, setEmail] = useState ("");
  const [password, setPassword] = useState ("");

  // Updated handleLogin function to prevent default form submission
  const handleLogin = (event) => {
    event.preventDefault(); // Prevent the default form submission
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('Logged in user:', user);
      })
      .catch((error) => {
        console.error('Error logging in:', error);
      });
  };
  
  return (
    <div className="auth-container">
    <div className="auth-box">
          <img className="spur-title" src={spurlogo} alt="Spur Logo" />

        <p className="login-text">Don't have account? <a href="#" onClick={() => setActive('signup')} className="login-link">Sign Up!</a></p>
        <form>
          <div className="fillout__boxes">
            <input 
            onChange={e => setEmail(e.target.value)} 
            className="input-field" type="email" placeholder="Email" 
            value={email}
            />
            <input 
            onChange={e => setPassword(e.target.value)} 
            className="input-field" type="password" placeholder="Password"
            value={password}
            />
          </div>
          <div className="signin__button">
          <button onClick = {handleLogin} type="submit" className="submit-button">Log in!</button>
          </div>
        </form>
    </div>
    
</div>
  )
}

export default Login