import React, { useState } from "react";
import "./category-search.css";

const CategoriesSearch = ({ onSearch, onCategorySelect, selectedCategory }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (typeof onSearch === "function") {
      onSearch(value);
    } else {
      console.error("onSearch is not a function");
    }
  };

  return (
    <div className="categories-search">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="categories">
        <h3>Categories</h3>
        <ul>
          <li>
            <button
              className={`category-button ${
                selectedCategory === "technical" ? "selected" : ""
              }`}
              onClick={() => onCategorySelect("technical")}
            >
              Technical
            </button>
          </li>
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

export default CategoriesSearch;
