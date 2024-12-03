import React, { useEffect } from "react";
import { useRef } from "react";
import "../styles/componentStyles/flashcard.css";

// Flashcard component for displaying a question-answer pair
export function Flashcard({ id, question, answer, category }) {
    // State to manage whether the card is flipped
    const [flipped, setFlipped] = React.useState(false);

    // State to dynamically adjust card height
    const [height, setHeight] = React.useState("initial");

    // References to the front and back elements of the card
    const frontEl = useRef();
    const backEl = useRef();

    // Function to determine the maximum height between the front and back content
    function setMaxHeight() {
        const frontHeight = frontEl.current.getBoundingClientRect().height; // Height of the front element
        const backHeight = backEl.current.getBoundingClientRect().height; // Height of the back element
        setHeight(Math.max(frontHeight, backHeight, 100)); // Ensure a minimum height of 100
    }

    // Set the card height whenever question, answer, or flipped state changes
    useEffect(setMaxHeight, [question, answer, flipped]);

    // Update card height on window resize
    useEffect(() => {
        window.addEventListener("resize", setMaxHeight); // Add resize listener
        return () => window.removeEventListener("resize", setMaxHeight); // Cleanup listener on unmount
    });

    return (
        <div
            className={`card ${flipped ? "flip" : ""}`} // Apply flip class if flipped
            style={{ height: height }} // Set dynamic height
            onClick={() => setFlipped(!flipped)} // Toggle flipped state on click
        >
            {/* Front of the card */}
            <div className="front" ref={frontEl}>
                {question} {/* Display the question */}
                <div className="category">{category}</div> {/* Display the category */}
            </div>
            {/* Back of the card */}
            <div className="back" ref={backEl}>
                {answer} {/* Display the answer */}
            </div>
        </div>
    );
}
