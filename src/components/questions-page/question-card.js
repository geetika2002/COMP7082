import React from "react";
import "./question-card.css";

const QuestionCard = ({
    id = 1,
    title = "Tell me about yourself",
    description = "Have you thought about what the elevator speech for yourself would be?",
    tags = ["behavioral", "easy"],
}) => {
    return (
        <div className="question-card">
            <div className="question-card-header">
                <h2>
                    {id}.{title}
                </h2>
                <button className="top-right-button">Save</button>
            </div>
            <p className="question-description">{description}</p>
            <div className="question-card-footer">
                <div className="tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag">
                            {tag}
                        </span>
                    ))}
                </div>
                <button className="start-button">Start</button>
            </div>
        </div>
    );
};

export default QuestionCard;
