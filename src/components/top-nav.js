import React from "react";
import styles from "./top-nav.css";

export function TopNav() {
    return (
        <div className="styles.main-container">
            <nav className="styles.top-nav">
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
    );
}
