import React from "react";
import "./top-nav.css";
import Logo from "../../assests/images/logo.png";

export function TopNav() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="navbar-logo">
                    <img src={Logo} alt="Logo" />
                    <span className="navbar-brand">HireHero</span>
                </div>
            </div>
            <ul className="navbar-list">
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
    );
}
