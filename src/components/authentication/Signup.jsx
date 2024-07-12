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
            <input className="input-field" type="text" placeholder="Name/Organization" />
            <input className="input-field" type="email" placeholder="Email" />

            {/* onClick calls togglePasswordVisibility
            true: type text, false: type password
            button displayed as Hide or Show */}

            <div className="password-container">
              <input
                className="input-field"
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
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
