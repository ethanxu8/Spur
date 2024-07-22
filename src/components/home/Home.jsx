import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import spurcreate from "../../assets/SpurCreate.png";
import { auth } from '../../firebase';
import { logoutUser } from '../../features/userSlice';
import { signOut } from 'firebase/auth';
import EventCreate from "../eventcreate/EventCreate";
import Authentication from '../authentication/Authentication';
import Explore from '../explore/Explore'; // Ensure the path to Explore is correct
import './home.css'; // Ensure the path to home.css is correct

const Home = () => {
  const user = useSelector(state => state.data.user.user);
  const dispatch = useDispatch();
  const [showEventCreate, setShowEventCreate] = useState(false); // State to manage visibility
  const [showExplore, setShowExplore] = useState(true); // State to manage explore page visibility

  const handleLogout = () => {
    dispatch(logoutUser());
    signOut(auth);
  };

  const toggleEventCreate = () => {
    setShowEventCreate(!showEventCreate);
    setShowExplore(!showExplore);
  };

  if (!user) {
    return <Authentication />; // Render Authentication if user is not logged in
  }

  return (
    <div className="home-container">
      <div className="navbar">
        <input
          type="text"
          className="search-bar"
          placeholder="Find an Event!"
        />
        <button className="create-event-button" onClick={toggleEventCreate}>
          <img src={spurcreate} alt={showEventCreate ? "Close" : "Create Event"} />
        </button>
      </div>
      <div className="content-container">
        {showEventCreate && <EventCreate user={user} />}
        {showExplore && <Explore user={user} />}
      </div>
    </div>
  );
};

export default Home;
