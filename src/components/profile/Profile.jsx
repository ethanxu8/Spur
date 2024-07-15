import React from 'react'
import {Provider, useSelector} from "react-redux";
import spurlogo from "../../assets/Spur_Logo.png"
import Authentication from '../authentication/Authentication'

function Profile() {

  const user = useSelector(state => state.data.user.user);

  return (
    <div>
      {user ?  
          (<img className="spur-title" src={spurlogo} alt="Spur Logo" />) 
          : 
          (<Authentication/>)};
      

    </div>

  )
}

export default Profile