import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../firebase';
import { logoutUser } from '../../features/userSlice';
import { signOut } from 'firebase/auth';
import { NavLink } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa6';
import './profile.css';
import Authentication from '../authentication/Authentication';

function Profile() {
  // Load name and bio from localStorage or use default values
  const [name, setName] = useState(localStorage.getItem('name') || 'Your Name');
  const [bio, setBio] = useState(localStorage.getItem('bio') || 'Your Bio');
  const user = useSelector(state => state.data.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    // Save name and bio to localStorage whenever they change
    localStorage.setItem('name', name);
    localStorage.setItem('bio', bio);
  }, [name, bio]);

  const handleLogout = () => {
    dispatch(logoutUser());
    signOut(auth);
  };

  const handleNameChange = (e) => {
    setName(e.target.value); // Update name state with input value
  };

  const handleBioChange = (e) => {
    setBio(e.target.value); // Update bio state with input value
  };

  return (
    <div className="profile-container">
      {user ? (
        <button onClick={handleLogout}>Log out</button>
      ) : (
        <Authentication />
      )}
      <button className="button">Edit Profile</button>

      <div className="input-name-con">
        <input
          id="name-input"
          type="text"
          value={name}
          onChange={handleNameChange}
          className="name-input"
          placeholder="Your Name"
        />
      </div>

      <div className="input-bio-con">
        <textarea
          id="bio-input"
          value={bio}
          onChange={handleBioChange}
          className="bio-input"
          placeholder="Write your bio here..."
        />
      </div>

      <NavLink exact to="/profile" className="nav-item" activeClassName="active">
        <i className="icon">
          <FaInstagram />
        </i>
      </NavLink>
    </div>
  );
}

export default Profile;
