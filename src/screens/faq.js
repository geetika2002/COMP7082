import Navbar from "../components/navbar"
import userImage from "../assests/images/logo.png"
import { useState } from "react";
import "../styles/faq.css"
import faqData from "../assests/sampledata/sampleFaq"

export function Faq() {
    const [open, setOpen] = useState(null); // Track which question is open
    
    const toggleAnswer = (id) => {
      if (open === id) {
        setOpen(null); // Close the answer if it's already open
      } else {
        setOpen(id); // Open the clicked answer
      }
    };
    return (
        <>
        <Navbar></Navbar>
            <div className="faq-dropdown">
                {faqData.map(({ id, question, answer }) => (
                <div key={id} className="faq-item">
                    <div
                    className="faq-question"
                    onClick={() => toggleAnswer(id)}
                    style={{ cursor: 'pointer', marginBottom: '10px', fontWeight: 'bold' }}>
                    {id + ". " + question}
                    </div>
                    {open === id && (
                    <div className="faq-answer" style={{ marginBottom: '20px' }}>
                        {answer}
                    </div>
                    )}
                </div>
                ))}
            </div>
        </>
    )
};