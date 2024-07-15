import React, { useState } from 'react'; // Importing React and useState hook
import spurlogo from "../../assets/Spur_Logo.png"; // Importing the logo image
import "./signup.css"; // Importing CSS for the signup component
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'; // Importing Firebase authentication methods
import { auth } from "../../firebase"; // Importing the configured Firebase auth instance

function Signup({ setActive }) {
  /* passwordVisible is a boolean that allows you to set states, initialized as false
     setPasswordVisible is a function that allows you to change value */
  const [passwordVisible, setPasswordVisible] = useState(false);

  /* Function to toggle the visibility of the password */
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  /* State variables to hold the username, email, and password */
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* Function to handle the signup process */
  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => 
        signInWithEmailAndPassword(auth, email, password)
          .then(() => 
            updateProfile(auth.currentUser, { displayName: username })
          )
      )
      .catch((err) => {
        alert(err); // Alerting the user in case of an error
      });
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
            <input 
              onChange={e => setUsername(e.target.value)} 
              className="input-field" 
              type="text" 
              placeholder="Name/Organization" 
              value={username}
            />
            <input 
              onChange={e => setEmail(e.target.value)} 
              className="input-field" 
              type="email" 
              placeholder="Email" 
              value={email} 
            />

            {/* 
            onClick calls togglePasswordVisibility
            true: type text, 
            false: type password
            button displayed as Hide or Show 
            */}
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
            <button onClick={handleSignup} type="button" className="submit-button">Sign Up!</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
