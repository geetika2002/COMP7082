// Importing necessary libraries and styles
import React, { useState } from "react"; // React and useState for component state
import "../styles/componentStyles/categorySearch.css"; // CSS for styling the component

// Functional component for a searchable category selection UI
const CategoriesSearch = ({ onSearch, onCategorySelect, selectedCategory }) => {
  // State to manage the text entered in the search bar
  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle changes in the search input
  const handleSearchChange = (event) => {
    const value = event.target.value; // Retrieve the new value from the input
    setSearchTerm(value); // Update the state with the new search term
    // Check if the onSearch prop is a valid function and call it
    if (typeof onSearch === "function") {
      onSearch(value); // Pass the search term to the parent component
    } else {
      console.error("onSearch is not a function"); // Log an error if onSearch is not a function
    }
  };

  // Render the search bar and category selection buttons
  return (
    <div className="categories-search">
      {/* Search bar */}
      <div className="search-bar">
        <input
          type="text" // Input type
          placeholder="Search..." // Placeholder text
          value={searchTerm} // Bind input value to searchTerm state
          onChange={handleSearchChange} // Trigger handler on change
        />
      </div>

      {/* Category buttons */}
      <div className="categories">
        <h3>Categories</h3>
        <ul>
          {/* Technical category button */}
          <li>
            <button
              className={`category-button ${
                selectedCategory === "technical" ? "selected" : ""
              }`} // Add 'selected' class if this category is selected
              onClick={() => onCategorySelect("technical")} // Trigger onCategorySelect with 'technical'
            >
              Technical
            </button>
          </li>

          {/* Behavioral category button */}
          <li>
            <button
              className={`category-button ${
                selectedCategory === "behavioral" ? "selected" : ""
              }`}
              onClick={() => onCategorySelect("behavioral")}
            >
              Behavioral
            </button>
          </li>

          {/* Industry-specific category button */}
          <li>
            <button
              className={`category-button ${
                selectedCategory === "industry" ? "selected" : ""
              }`}
              onClick={() => onCategorySelect("industry")}
            >
              Industry Specific
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

// Export the component for use in other parts of the application
export default CategoriesSearch;
