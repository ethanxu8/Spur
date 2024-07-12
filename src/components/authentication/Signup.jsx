import React, { useState } from 'react';
import spurlogo from "../../assets/Spur_Logo.png";
import "./signup.css";

function Signup({ setActive }) {
  /* passwordVisible is a booleon that allows you to set states, initialized as false
  setPasswordVisible is a function that allows you to change value*/
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  
  };
  const [username, setUsername] = useState ("");
  const [email, setEmail] = useState ("");
  const [password, setPassword] = useState ("");

  return (
    <div className="auth-container">
      <div className="auth-box">
        <img className="spur-title" src={spurlogo} alt="Spur Logo" />
        <p className="login-text">
          Have an account?{' '}
          <a href="#" onClick={() => setActive('login')} className="login-link">
            Log in!
          </a>
        </p>
        <form>
          <div className="fillout__boxes">
            <input onChange={e => setUsername(e.target.value)} className="input-field" type="text" placeholder="Name/Organization" 
            value={username}/>
            <input onChange={e => setEmail(e.target.value)} className="input-field" type="email" placeholder="Email"
            value={email} />

            {/* onClick calls togglePasswordVisibility
            true: type text, false: type password
            button displayed as Hide or Show */}

            <div className="password-container">
              <input
                onChange={e => setPassword(e.target.value)} 
                className="input-field"
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                value={password}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <div className="signin__button">
            <button type="submit" className="submit-button">Sign Up!</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
