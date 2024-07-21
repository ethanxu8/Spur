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
  const [showSearchBar, setShowSearchBar] = useState(false); // State to manage search bar visibility

  const toggleEventCreate = () => {
    setShowEventCreate(!showEventCreate);
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
          onFocus={() => setShowSearchBar(true)}
          onBlur={() => setShowSearchBar(false)}
        />
        <button className="create-event-button" onClick={toggleEventCreate}>
          <img src={spurcreate} alt={showEventCreate ? "Close" : "Create Event"} />
        </button>
      </div>
      {showEventCreate ? <EventCreate user={user} /> : <Explore user={user} />}
    </div>
  );
};

export default Home;
