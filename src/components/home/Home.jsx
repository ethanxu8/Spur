import React from 'react';
import {Avatar} from "@mui/material";

import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../firebase';
import { logoutUser } from '../../features/userSlice';
import { signOut } from 'firebase/auth';

const Home = () => {
  const user = useSelector(state => state.data.user.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    signOut(auth);
    
  }
  return (
    <div>
      <h1>Spur!
        heeolfeoiwfheoiwwfho
      </h1>

            <button onClick={handleLogout}>Log out</button>


    </div>
  );
};

export default Home;