import { Link } from "react-router-dom";
import React from "react";
import { TopNav } from "../components/common-components/top-nav";
import "../styles/page-styles/questions.css";
import QuestionCard from "../components/questions-page/question-card";
import CategoriesSearch from "../components/category-search/category-search";

export function Questions() {
    return (
        <div>
            <TopNav />
            <div className="main-layout">
                <CategoriesSearch/>
                <QuestionCard />
                <QuestionCard />
            </div>
        </div>
    );
}
