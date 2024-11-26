import React from "react";
import "./question-card.css";

const QuestionCard = ({id, title, description, tags}) => {
    return (
        <div className="question-card">
          <header className="question-card-header">
            <h2>
              {id}. {title}
            </h2>
            <button className="top-right-button">Save</button>
          </header>
          <p className="question-description">{description}</p>
          <footer className="question-card-footer">
            <ul className="tag-questions">
              {tags.map((tag, index) => (
                <li key={index} className="tag-question">
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
