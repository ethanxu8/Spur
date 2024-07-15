// Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlinePinDrop, MdCalendarMonth, MdPerson } from 'react-icons/md';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="bottom-nav">
      <NavLink exact to="/home" className="nav-item" activeClassName="active">
        <i className="icon">
          <MdOutlinePinDrop />
        </i>
        <span className="nav-text">Home</span>
      </NavLink>
      <NavLink exact to="/upcoming" className="nav-item" activeClassName="active">
        <i className="icon">
          <MdCalendarMonth />
        </i>
        <span className="nav-text">Upcoming</span>
      </NavLink>
      <NavLink exact to="/profile" className="nav-item" activeClassName="active">
        <i className="icon">
          <MdPerson />
        </i>
        <span className="nav-text">Profile</span>
      </NavLink>
    </div>
  );
};

export default Navbar;