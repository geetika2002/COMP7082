// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css"; // Create a CSS file for styling
import userImage from "../assests/images/profile-user.png";
import { useState } from "react";
import { useEffect } from "react";

const Sidebar = () => {
    const [userName, setUserName] = useState("");

    useEffect(() => {
        // Get user name from localStorage
        const firstName = localStorage.getItem("firstName");
        const lastName = localStorage.getItem("lastName");

        if (firstName && lastName) {
            setUserName(`${firstName} ${lastName}`);
        }
    }, []);

    return (
        <>
            <aside>
                <p className="welcome"> Welcome! </p>
                <p className="username">{userName || "User"} </p>
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
                <a href="javascript:void(0)">
                    <Link to="/">Logout</Link>
                </a>
            </aside>

            <div class="social">
                <a
                    href="https://www.linkedin.com/in/florin-cornea-b5118057/"
                    target="_blank"
                >
                    <i class="fa fa-linkedin"></i>
                </a>
            </div>
        </>
    );
};

export default Sidebar;
