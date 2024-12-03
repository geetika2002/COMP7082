import React, { useState } from "react";
import Navbar from "../components/navbar";
import "../styles/questions.css";
import QuestionList from "../components/questions-page/questionslist";
import CategoriesSearch from "../components/category-search/category-search";

export function Questions() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategorySelect = (category) => {
    // If the clicked category is already selected, deselect it
    if (selectedCategory === category) {
      setSelectedCategory(""); // Clear selection
    } else {
      setSelectedCategory(category); // Select new category
    }
  };

  return (
    <div>
      <Navbar />
      <div className="main-layout">
        <CategoriesSearch
          onSearch={handleSearch}
          onCategorySelect={handleCategorySelect}
          selectedCategory={selectedCategory}
        />
        <QuestionList searchTerm={searchTerm} selectedCategory={selectedCategory} />
      </div>
    </div>
  );
}
