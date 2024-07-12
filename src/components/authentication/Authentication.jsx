import React, { useState } from 'react'
import Login from "./Login"
import Signup from "./Signup"
import spurlogo from "../../assets/Spur_Logo.png"
import "./authentication.css"

function Authentication() {
  const [active, setActive] = useState("login")

  
  return (
    <div>
    {active ==="login" ? (
    <Login setActive={setActive} />
    ) : (
      <Signup setActive={setActive} />
    )}
    
    </div>
    
  )
}

export default Authentication