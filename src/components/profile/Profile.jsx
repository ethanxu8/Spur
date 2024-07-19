import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../firebase';
import { logoutUser } from '../../features/userSlice';
import { signOut } from 'firebase/auth';
import { NavLink } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa6';
import './profile.css';
import Authentication from '../authentication/Authentication';

function Profile() {
  const [name, setName] = useState('Your Name'); // State for the editable name
  const user = useSelector(state => state.data.user.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    signOut(auth);
  };

  const handleNameChange = (e) => {
    setName(e.target.value); // Update name state with input value
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
        {/* <label htmlFor="name-input" className="name-label">Name:</label> */}
        <input
          id="name-input"
          type="text"
          value={name}
          onChange={handleNameChange}
          className="name-input"
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
