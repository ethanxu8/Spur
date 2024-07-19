import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../firebase';
import { logoutUser } from '../../features/userSlice';
import { signOut } from 'firebase/auth';
import EventCreate from "../eventcreate/EventCreate";
import Authentication from '../authentication/Authentication';

const Home = () => {
  const user = useSelector(state => state.data.user.user);
  const dispatch = useDispatch();
  const [showEventCreate, setShowEventCreate] = useState(false); // State to manage visibility

  const handleLogout = () => {
    dispatch(logoutUser());
    signOut(auth);
  };

  const toggleEventCreate = () => {
    setShowEventCreate(!showEventCreate);
  };

  return (
    <div>
      <button onClick={toggleEventCreate}>
        {showEventCreate ? "Close" : "Create Event"}
      </button>
      {showEventCreate && (
        user ? <EventCreate user={user} /> : <Authentication />
      )} {/* Conditionally render EventCreate or Authentication */}
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Home;
