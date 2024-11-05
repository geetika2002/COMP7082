import React from 'react';
import './category-search.css';

const CategoriesSearch = () => {
    return (
        <div className="categories-search">
            <div className="search-bar">
                <input type="text" placeholder="Search..."/>
            </div>
            <div className="categories">
                <h3>Categories</h3>
                <ul>
                    <li>
                        <a href="#category1">Technical</a>
                    </li>
                    <li>
                        <a href="#category2">Behavioral</a>
                    </li>
                    <li>
                        <a href="#category3">Industry Specific</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default CategoriesSearch;

