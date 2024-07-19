import React from 'react'
import {Provider, useSelector} from "react-redux";
import spurlogo from "../../assets/Spur_Logo.png"
import Authentication from '../authentication/Authentication'

import { useDispatch } from 'react-redux';
import { auth } from '../../firebase';
import { logoutUser } from '../../features/userSlice';
import { signOut } from 'firebase/auth';

function Profile() {

  const user = useSelector(state => state.data.user.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    signOut(auth);
    
  }


  return (
    <div>
      {user ?  
          (<button onClick={handleLogout}>{user.email}</button>) 
          : 
          (<Authentication/>)}
      

    </div>

  )
}

export default Profile