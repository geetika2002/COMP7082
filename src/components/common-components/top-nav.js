import React from "react";
import "./top-nav.css";
import Logo from "../../assests/images/logo.png";

export function TopNav() {
    return (
        <div className="main-container">
            <div className="logo-container">
                <img src={Logo} alt="logo" />
            </div>
            <div className="title-container">
                <nav className="top-nav">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/login">Login</a>
                        </li>
                        <li>
                            <a href="/logout">Logout</a>
                        </li>
                        <li>
                            <a href="/dashboard">Dashboard</a>
                        </li>
                        <li>
                            <a href="/questions">Questions</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
