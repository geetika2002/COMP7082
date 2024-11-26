import { Link } from "react-router-dom";
import React from "react";
import Navbar from "../components/navbar"
import "../styles/page-styles/questions.css";
import QuestionList from "../components/questions-page/questionslist";
import CategoriesSearch from "../components/category-search/category-search";

export function Questions() {
    return (
        <div>
            <Navbar />
            <div className="main-layout">
                <CategoriesSearch/>
                <QuestionList />
            </div>
        </div>
    );
}
