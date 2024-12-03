import React, { useState } from "react"; // Import React and useState hook for managing state
import Navbar from "../components/navbar"; // Import Navbar component to be displayed at the top
import "../styles/questions.css"; // Import the CSS file for styling the Questions component
import QuestionList from "../components/questionsList"; // Import the QuestionList component to display questions
import CategoriesSearch from "../components/categorySearch"; // Import the CategoriesSearch component for filtering

export function Questions() {
  // State to manage the search term input by the user
  const [searchTerm, setSearchTerm] = useState("");
  // State to manage the selected category for filtering
  const [selectedCategory, setSelectedCategory] = useState("");

  // Function to handle search input changes and update the searchTerm state
  const handleSearch = (term) => {
    setSearchTerm(term); // Set the search term based on user input
  };

  // Function to handle category selection
  const handleCategorySelect = (category) => {
    // If the clicked category is already selected, deselect it
    if (selectedCategory === category) {
      setSelectedCategory(""); // Clear selected category if it's clicked again
    } else {
      setSelectedCategory(category); // Set the new category as selected
    }
  };

  return (
    <div>
      {/* Render the Navbar at the top of the page */}
      <Navbar />
      
      <div className="main-layout"> {/* Main wrapper for the layout of the page */}
        
        {/* CategoriesSearch component for search input and category filter */}
        <CategoriesSearch
          onSearch={handleSearch} // Pass the handleSearch function to handle search
          onCategorySelect={handleCategorySelect} // Pass the handleCategorySelect function to handle category selection
          selectedCategory={selectedCategory} // Pass the selectedCategory state to highlight the selected category
        />
        
        {/* QuestionList component to display the filtered list of questions */}
        <QuestionList 
          searchTerm={searchTerm} // Pass the search term to filter questions
          selectedCategory={selectedCategory} // Pass the selected category to filter questions by category
        />
      </div>
    </div>
  );
}
