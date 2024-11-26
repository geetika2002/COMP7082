import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate hook
import "../styles/navbar.css";

function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate(); // Use the useNavigate hook for navigation

    useEffect(() => {
        // Check if user is logged in by looking for a token in localStorage
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token); // Update state based on token presence
    }, []);

    const handleLogout = () => {
        // Clear user data from localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('firstName');
        localStorage.removeItem('lastName');
        setIsLoggedIn(false); // Update state

        // Redirect to login page after logout (asynchronous)
        navigate("/login", { replace: true }); // Use { replace: true } to prevent going back to the dashboard page
    };

    return (
        <div className="navbar">
            <div className="leftSide">HireHero</div>
            <div className="rightSide">
                <Link to="/about"> About Us </Link>
                <Link to="/faq"> Help </Link>
                <div className="text">|</div>

                {isLoggedIn ? (
                    // Show these links when the user is logged in
                    <>
                        <Link to="/dashboard">Dashboard</Link>
                        <Link to="/" onClick={handleLogout}>Logout</Link>
                    </>
                ) : (
                    // Show these links when the user is logged out
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/create">Signup</Link>
                    </>
                )}
            </div>
        </div>
    );
}

export default Navbar;
