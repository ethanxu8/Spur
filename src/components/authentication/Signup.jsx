import React, { useState } from 'react'; // Importing React and useState hook
import spurlogo from "../../assets/Spur_Logo.png"; // Importing the logo image
import "./signup.css"; // Importing CSS for the signup component
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'; // Importing Firebase authentication methods
import { auth, db } from "../../firebase"; // Importing the configured Firebase auth and Firestore instance
import { doc, setDoc } from 'firebase/firestore'; // Importing Firestore methods

function Signup({ setActive }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await signInWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: username });

      // Store the user information in Firestore
      await setDoc(doc(db, 'users', auth.currentUser.uid), {
        uid: auth.currentUser.uid,
        email: auth.currentUser.email,
        displayName: username,
      });

      alert('User created successfully!');
    } catch (err) {
      alert(err); // Alerting the user in case of an error
    }
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
