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
  // Load name, bio, and tagline from localStorage or use default values
  const [name, setName] = useState(localStorage.getItem('name') || 'Your Name');
  const [bio, setBio] = useState(localStorage.getItem('bio') || 'Your Bio');
  const [tagline, setTagline] = useState(localStorage.getItem('tagline') || 'Your Tagline');
  const user = useSelector(state => state.data.user.user);
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);

  useEffect(() => {
    // Save name, bio, and tagline to localStorage whenever they change
    localStorage.setItem('name', name);
    localStorage.setItem('bio', bio);
    localStorage.setItem('tagline', tagline);
  }, [name, bio, tagline]);

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

  const handleTaglineChange = (e) => {
    setTagline(e.target.value); // Update tagline state with input value
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      {user ?  
          (<button onClick={handleLogout}>{user.email}</button>) 
          : 
          (<Authentication/>)}
      

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

      <div className="input-tagline-con">
        <input
          id="tagline-input"
          value={tagline}
          onChange={handleTaglineChange}
          className="tagline-input"
          placeholder="Write your tagline here..."
        />
      </div>

      <div className="image-upload-con">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="image-input"
        />
        {image && <img src={image} alt="Uploaded Preview" className="image-preview" />}
      </div>

      <button onClick={handleLogout}>Log out</button>

      <NavLink exact to="/profile" className="nav-item" activeClassName="active">
        <i className="icon">
          <FaInstagram />
        </i>
      </NavLink>
    </div>
  );
}

export default Profile;
