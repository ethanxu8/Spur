import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar'; 
import Profile from'./components/profile/Profile';
import Home from'./components/home/Home';

const App = () => {
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