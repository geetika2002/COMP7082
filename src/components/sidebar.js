import React from "react";
import { Link } from "react-router-dom"; // Import Link component from react-router-dom for routing
import "../styles/componentStyles/sidebar.css"; // Import the CSS file for styling the sidebar
import { useState } from "react"; // Import useState hook to manage state
import { useEffect } from "react"; // Import useEffect hook to run side effects (e.g., fetching data)

const Sidebar = () => {
    const [userName, setUserName] = useState(""); // State to hold the user's name

    useEffect(() => {
        // Fetch the user's first name and last name from localStorage
        const firstName = localStorage.getItem("firstName");
        const lastName = localStorage.getItem("lastName");

        // If both first and last names are found in localStorage, set the full name in state
        if (firstName && lastName) {
            setUserName(`${firstName} ${lastName}`);
        }
    }, []); // Empty dependency array means this runs once, when the component mounts

    return (
        <>
            <aside> {/* Sidebar container */}
                <p className="welcome"> Welcome! </p> {/* Welcome message */}
                <p className="username">{userName || "User"}</p> {/* Display the user's name or "User" if not set */}
                
                {/* Sidebar links with navigation to different pages */}
                <a href="javascript:void(0)">
                    <Link to="/">Homepage</Link>
                </a>
                <a href="javascript:void(0)">
                    <Link to="/questions">Interview Prep</Link>
                </a>
                <a href="javascript:void(0)">
                    <Link to="/flashcards">Flashcards</Link>
                </a>
                <a href="javascript:void(0)">
                    <Link to="/resource">Resources</Link>
                </a>
                <a href="javascript:void(0)">
                    <Link to="/edit">Edit Profile</Link>
                </a>
            </aside>

            {/* Social media section with a LinkedIn link */}
            <div className="social">
                <a href="https://www.linkedin.com/in/florin-cornea-b5118057/" target="_blank">
                    <i className="fa fa-linkedin"></i> {/* LinkedIn icon */}
                </a>
            </div>
        </>
    );
};

export default Sidebar; // Export the Sidebar component for use elsewhere
