import Navbar from "../components/navbar"; // Import the Navbar component
import userImage from "../assests/images/logo.png"; // Import a logo or user image
import { useState } from "react"; // Import React's useState hook
import "../styles/faq.css"; // Import the CSS file for styling
import faqData from "../assests/data/dataFaq"; // Import FAQ data

export function Faq() {
    // State to track which FAQ question is currently open
    const [open, setOpen] = useState(null);

    // Function to toggle the visibility of the answer
    const toggleAnswer = (id) => {
        if (open === id) {
            setOpen(null); // Close the answer if it's already open
        } else {
            setOpen(id); // Open the clicked answer
        }
    };

    return (
        <>
            <Navbar /> {/* Render the Navbar */}
            <div className="faq-dropdown">
                {faqData.map(({ id, question, answer }) => (
                    <div key={id} className="faq-item">
                        <div
                            className="faq-question"
                            onClick={() => toggleAnswer(id)}
                            style={{
                                cursor: 'pointer',
                                marginBottom: '10px',
                                fontWeight: 'bold',
                            }}
                        >
                            {id + ". " + question} {/* Display the question with its ID */}
                        </div>
                        {open === id && ( /* Conditionally render the answer if it's open */
                            <div
                                className="faq-answer"
                                style={{ marginBottom: '20px' }}
                            >
                                {answer} {/* Display the answer */}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};
