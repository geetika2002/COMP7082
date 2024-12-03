import React from "react";
import QuestionCard from "./questionCard"; // Import QuestionCard component to display individual questions

import { questions } from "../assests/data/dataQuestion"; // Import the list of questions from the data folder

import "../styles/componentStyles/questionsList.css";

// QuestionList component accepts searchTerm and selectedCategory as props
const QuestionList = ({ searchTerm, selectedCategory }) => {
  // Filter the questions based on the search term and selected category
  const filteredQuestions = questions.filter((question) => {
    // Check if any tag in the question matches the search term (case insensitive)
    const matchesSearch = question.tags.some((tag) =>
      tag.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    // Check if the question's tags include the selected category (if one is selected)
    const matchesCategory =
      !selectedCategory || question.tags.includes(selectedCategory);

    // Return true if both conditions are met
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="question-list">
      {/* Map over filtered questions and render each as a QuestionCard */}
      {filteredQuestions.map((question) => (
        <QuestionCard
          key={question.id} // Unique key for each QuestionCard
          id={question.id}
          title={question.title}
          description={question.description}
          tags={question.tags}
        />
      ))}
    </div>
  );
};

export default QuestionList; // Export the component for use in other parts of the app
