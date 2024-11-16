import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"

function Navbar() {
    return (
        <div className="navbar">
            <div className="leftSide">HireHero</div>
            <div className="rightSide">
            <Link to='/'> About Us </Link>
            <Link to='/dashboard'> Help</Link>
            <div className="text">|</div>
            <Link to='/login'>Login </Link>
            <Link to='/signup'>Signup </Link>
            </div>
        </div>
    )
}
export default Navbar; 

