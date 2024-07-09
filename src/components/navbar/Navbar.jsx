import React from 'react'
import { Link } from 'react-router-dom';
import { MdOutlinePinDrop, MdCalendarMonth, MdPerson } from "react-icons/md";
import './navbar.css';

const Navbar = () => {
    return (
      <div className="bottom-nav">
        <Link to="/" className="nav-item">
          <i className="icon">
            <MdOutlinePinDrop />
          </i>
          <span className="nav-text">Explore</span>
        </Link>
        <Link to="/"className="nav-item">
          <i className="icon">
            <MdCalendarMonth />
          </i>
          <span className="nav-text">Upcoming</span>
        </Link>
        <Link to="/profile" className="nav-item">
        <i className="icon">
          <MdPerson />
        </i>
        <span className="nav-text">Profile</span>
      </Link>
      </div>
    );
  };

export default Navbar

// fix upcoming link later