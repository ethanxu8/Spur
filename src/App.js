import React from 'react'
import {Provider, useSelector} from "react-redux";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar'; 
import Profile from'./components/profile/Profile';
import Home from'./components/home/Home';

const App = () => {
    const user = useSelector(state => state.data.user);

    console.log(user);

  return (
    <Router>
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          
        </Routes>
    
    </Router>
  )
}

export default App