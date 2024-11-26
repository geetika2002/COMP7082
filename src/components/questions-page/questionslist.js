import React from "react";
import QuestionCard from "./question-card";

import { questions } from "../../data/questionData"; // Import questions from the data folder

import "./question-list.css";

const QuestionList = ({ searchTerm, selectedCategory }) => {
    // Filter questions based on the search term and selected category
    const filteredQuestions = questions.filter((question) => {
      const matchesSearch = question.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const matchesCategory =
        !selectedCategory || question.tags.includes(selectedCategory);
      return matchesSearch && matchesCategory;
    });
  
    return (
      <div className="question-list">
        {filteredQuestions.map((question) => (
          <QuestionCard
            key={question.id}
            id={question.id}
            title={question.title}
            description={question.description}
            tags={question.tags}
          />
        ))}
      </div>
    );
  };
  
  export default QuestionList;