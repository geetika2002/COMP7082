import React, { useEffect } from "react";
import { useRef } from "react";
import "./Flashcard.css";

export function Flashcard({ id, question, answer, category }) {
    const [flipped, setFlipped] = React.useState(false);
    const [height, setHeight] = React.useState("initial");
    const frontEl = useRef();
    const backEl = useRef();

    function setMaxHeight() {
        const frontHeight = frontEl.current.getBoundingClientRect().height;
        const backHeight = backEl.current.getBoundingClientRect().height;
        setHeight(Math.max(frontHeight, backHeight, 100));
    }

    useEffect(setMaxHeight, [question, answer, flipped]);

    useEffect(() => {
        window.addEventListener("resize", setMaxHeight);
        return () => window.removeEventListener("resize", setMaxHeight);
    });

    return (
        <div
            className={`card ${flipped ? "flip" : ""}`}
            style={{ height: height }}
            onClick={() => setFlipped(!flipped)}
        >
            <div className="front" ref={frontEl}>
                {question}
                <div className="category">{category}</div>
            </div>
            <div className="back" ref={backEl}>
                {answer}
            </div>
        </div>
    );
}
