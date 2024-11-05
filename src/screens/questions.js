import { Link } from "react-router-dom";
import React from "react";
import { TopNav } from "../components/common-components/top-nav";
import "../styles/page-styles/questions.css";
import QuestionCard from "../components/questions-page/question-card";

export function Questions() {
    return (
        <div>
            <TopNav />
            <div className="main-container">
                <div className="question-container">
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                </div>
            </div>
        </div>
    );
}
