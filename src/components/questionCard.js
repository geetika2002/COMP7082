import React from "react";
import "../styles/componentStyles/questionCard.css"; // Import CSS for styling

// Functional component for displaying a question card
const QuestionCard = ({ id, title, description, tags }) => {
    return (
        <div className="question-card">
            <header className="question-card-header">
                <h2>
                    {id}. {title} {/* Display question ID and title */}
                </h2>
                <button className="top-right-button">Save</button>
            </header>
            <p className="question-description">{description}</p> {/* Display the description of the question */}
            <footer className="question-card-footer">
                <ul className="tag-questions"> {/* List for displaying tags */}
                    {tags.map((tag, index) => (
                        <li key={index} className="tag-question"> {/* Display each tag */}
                            {tag}
                        </li>
                    ))}
                </ul>
                <button className="start-button">Start</button>
            </footer>
        </div>
    );
};

export default QuestionCard;
