import { Link } from "react-router-dom";
import React from "react";
import { TopNav } from "../components/top-nav";
import styles from "../styles/questions.css";
import QuestionCard from "../components/question-card";

export function Questions() {
    return (
        <div>
            <div className="styles.main-container">
                <TopNav />
                <h1>This is the questions page!</h1>
                <p>
                    <Link to="/dashboard">Go to Dashboard</Link>
                </p>

                <div className="styles.question-container">
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                </div>
            </div>
        </div>
    );
}
