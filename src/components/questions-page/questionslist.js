import React from "react";
import QuestionCard from "./question-card";
import "./question-list.css";

const questions = [
  {
    id: 1,
    title: "Tell me about yourself",
    description: "Have you thought about what the elevator speech for yourself would be?",
    tags: ["behavioral", "easy"],
  },
  {
    id: 2,
    title: "What are your strengths?",
    description: "Identify your strengths and prepare examples to support them.",
    tags: ["behavioral", "medium"],
  },
  {
    id: 3,
    title: "Where do you see yourself in 5 years?",
    description: "Think about your career goals and aspirations.",
    tags: ["career", "hard"],
  },
];

const QuestionList = () => {
  return (
    <div className="question-list">
      {questions.map((question) => (
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
