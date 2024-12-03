import { Link } from "react-router-dom"; // Import Link for navigation between routes
import { useState } from "react"; // Import useState for state management
import React from "react"; // Import React library
import Navbar from "../components/navbar"; // Import Navbar component
import CategoriesSearch from "../components/categorySearch"; // Import CategoriesSearch component (unused in this code)
import "../styles/flashcards.css"; // Import CSS for styling
import { Flashcard } from "../components/flashcard"; // Import Flashcard component

export function Flashcards() {
    // Array of flashcard questions with details such as question, answer, and category
    const questions = [
        {
            id: 1,
            question: "What is a closure in JavaScript?",
            answer: "A closure is a function that retains access to its outer scope even after the outer function has finished executing.",
            category: "JavaScript",
        },
        {
            id: 2,
            question: "Explain the concept of inheritance in OOP.",
            answer: "Inheritance is a feature of OOP where a class can inherit properties and methods from another class.",
            category: "Object-Oriented Programming",
            categoryShort: "OOP",
        },
        {
            id: 3,
            question: "What is the difference between SQL and NoSQL databases?",
            answer: "SQL databases are relational and use structured query language for defining and manipulating data, while NoSQL databases are non-relational and can store data in various formats like document, key-value, graph, etc.",
            category: "Databases",
            categoryShort: "DB",
        },
        {
            id: 4,
            question: "How does the Internet work?",
            answer: "The Internet is a global network of interconnected computers that communicate through standardized protocols like TCP/IP to exchange data.",
            category: "Networking",
            categoryShort: "Net",
        },
        {
            id: 5,
            question: "What is a RESTful API?",
            answer: "A RESTful API is an application programming interface that adheres to the principles of REST (Representational State Transfer) and allows interaction with web services using standard HTTP methods.",
            category: "Web Development",
            categoryShort: "Web Dev",
        },
        {
            id: 6,
            question: "What is the difference between let, var, and const in JavaScript?",
            answer: "let and const are block-scoped and were introduced in ES6, while var is function-scoped. const is used for constants, let for variables that can be reassigned, and var is generally avoided in modern code.",
            category: "JavaScript",
        },
        {
            id: 7,
            question: "What are the four pillars of Object-Oriented Programming (OOP)?",
            answer: "The four pillars are encapsulation, abstraction, inheritance, and polymorphism.",
            category: "Object-Oriented Programming",
            categoryShort: "OOP",
        },
        {
            id: 8,
            question: "What is a primary key in a database?",
            answer: "A primary key is a unique identifier for each record in a table. It must contain unique values and cannot contain null values.",
            category: "Databases",
            categoryShort: "DB",
        },
        {
            id: 9,
            question: "What is DNS and how does it work?",
            answer: "DNS (Domain Name System) translates human-readable domain names (like www.google.com) into IP addresses that computers use to identify each other on a network.",
            category: "Networking",
            categoryShort: "Net",
        },
        {
            id: 10,
            question: "What is the difference between synchronous and asynchronous programming?",
            answer: "Synchronous programming executes tasks sequentially, blocking the program until each task completes. Asynchronous programming allows tasks to run independently, enabling non-blocking execution.",
            category: "JavaScript",
        },
        {
            id: 11,
            question: "What are the principles of responsive web design?",
            answer: "Responsive web design principles include flexible layouts, flexible images, and media queries to ensure a website adapts to different screen sizes.",
            category: "Web Development",
            categoryShort: "Web Dev",
        },
        {
            id: 12,
            question: "What is a firewall?",
            answer: "A firewall is a network security device or software that monitors and controls incoming and outgoing network traffic based on predetermined security rules.",
            category: "Networking",
            categoryShort: "Net",
        },
        {
            id: 13,
            question: "What is an index in a database?",
            answer: "An index is a database structure that improves the speed of data retrieval operations by creating a pointer to the data in a table.",
            category: "Databases",
            categoryShort: "DB",
        },
        {
            id: 14,
            question: "What is the Virtual DOM in React?",
            answer: "The Virtual DOM is a lightweight in-memory representation of the real DOM. React updates the Virtual DOM first and then efficiently updates the real DOM with only the changed elements.",
            category: "JavaScript",
        },
        {
            id: 15,
            question: "What is polymorphism in OOP?",
            answer: "Polymorphism allows objects to be treated as instances of their parent class, enabling methods to behave differently based on the object that calls them.",
            category: "Object-Oriented Programming",
            categoryShort: "OOP",
        },
        {
            id: 16,
            question: "What are HTTP methods?",
            answer: "HTTP methods are used to specify the desired action for a resource. Common methods include GET, POST, PUT, DELETE, PATCH, and OPTIONS.",
            category: "Web Development",
            categoryShort: "Web Dev",
        },
        {
            id: 17,
            question: "What is the OSI model?",
            answer: "The OSI model is a conceptual framework for understanding network interactions in seven layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application.",
            category: "Networking",
            categoryShort: "Net",
        },
        {
            id: 18,
            question: "What is normalization in databases?",
            answer: "Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity through a series of normal forms.",
            category: "Databases",
            categoryShort: "DB",
        },
        {
            id: 19,
            question: "What is the purpose of middleware in web development?",
            answer: "Middleware is software that sits between the client and server, processing requests and responses. It is used for tasks like authentication, logging, and routing.",
            category: "Web Development",
            categoryShort: "Web Dev",
        },
        {
            id: 20,
            question: "What is event delegation in JavaScript?",
            answer: "Event delegation is a technique where a single event listener is added to a parent element to handle events for its child elements, improving performance and reducing memory usage.",
            category: "JavaScript",
        },
    ];

    // Function to generate Flashcard components for each question
    const generateFlashcards = () => {
        return questions.map((question) => (
            <Flashcard
                key={question.id} // Unique key for each flashcard
                id={question.id} // Pass question ID as a prop
                question={question.question} // Pass question text as a prop
                answer={question.answer} // Pass answer text as a prop
                category={question.category} // Pass category as a prop
            />
        ));
    };

    return (
        <div style={{ marginTop: "50px" }}> {/* Wrapper div with top margin */}
            <Navbar /> {/* Render the Navbar component */}
            <div className="grid-container"> {/* Main grid container for layout */}
                <div className="flashcard-container"> {/* Sub-container for flashcards */}
                    {generateFlashcards()} {/* Render the generated Flashcards */}
                </div>
            </div>
        </div>
    );
}
