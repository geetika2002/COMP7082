import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import "../styles/editProfile.css"; // Import the CSS file for styling

export function EditProfile() {
    // State variables to store user input and feedback
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [topics, setTopics] = useState("");
    const [skills, setSkills] = useState("");
    const [error, setError] = useState(""); // For error messages
    const [success, setSuccess] = useState(""); // For success messages

    const navigate = useNavigate(); // Hook for programmatic navigation

    useEffect(() => {
        // Fetch user data when the component mounts
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem("token"); // Get the token from localStorage
                const response = await fetch("http://localhost:4000/users/me", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`, // Add authorization header
                    },
                });

                if (response.ok) {
                    // If response is OK, update the state with user data
                    const data = await response.json();
                    setFirstName(data.firstName);
                    setLastName(data.lastName);
                    setEmail(data.email);
                    setTopics(data.topics);
                    setSkills(data.skills);
                } else {
                    setError("Failed to load user data."); // Set an error message on failure
                }
            } catch (err) {
                setError("Something went wrong while fetching user data."); // Handle fetch errors
            }
        };

        fetchUserData(); // Call the fetch function
    }, []); // Empty dependency array ensures this runs only once

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        try {
            const token = localStorage.getItem("token"); // Get the token from localStorage
            const response = await fetch("http://localhost:4000/users/me", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`, // Add authorization header
                },
                body: JSON.stringify({
                    firstName, // Send updated first name
                    lastName,  // Send updated last name
                    email,     // Send updated email
                    topics,    // Send updated topics
                    skills,    // Send updated skills
                }),
            });

            if (response.ok) {
                setSuccess("Profile updated successfully."); // Show success message
                setError(""); // Clear error message
                localStorage.setItem("firstName", firstName); // Update localStorage with new data
                localStorage.setItem("lastName", lastName);
                navigate('/dashboard'); // Navigate to the dashboard
            } else {
                const data = await response.json();
                setError(data.message || "Failed to update profile."); // Show error message on failure
                setSuccess(""); // Clear success message
            }
        } catch (err) {
            setError("Something went wrong. Please try again."); // Handle fetch errors
            setSuccess(""); // Clear success message
        }
    };

    return (
        <>
            {/* Navbar component */}
            <Navbar />
            <div className="edit-profile-container"> {/* Wrapper for the edit profile page */}
                <div className="edit-profile-card">
                    <h2>Edit Profile</h2>
                    {error && <p className="error-message">{error}</p>} {/* Display error messages */}
                    {success && <p className="success-message">{success}</p>} {/* Display success messages */}
                    <form onSubmit={handleSubmit}> {/* Form for editing profile */}
                        <div className="form-group"> {/* Group for first name input */}
                            <label htmlFor="firstName"></label>
                            <input
                                type="text"
                                id="firstName"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)} // Update first name state
                                required
                            />
                        </div>
                        <div className="form-group"> {/* Group for last name input */}
                            <label htmlFor="lastName"></label>
                            <input
                                type="text"
                                id="lastName"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)} // Update last name state
                                required
                            />
                        </div>
                        <div className="form-group"> {/* Group for email input */}
                            <label htmlFor="email"></label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} // Update email state
                                required
                            />
                        </div>
                        <div className="form-group"> {/* Group for topics input */}
                            <label htmlFor="topics">Topics:</label>
                            <input
                                type="text"
                                id="topics"
                                value={topics}
                                onChange={(e) => setTopics(e.target.value)} // Update topics state
                                placeholder="E.g. JavaScript, React"
                            />
                        </div>
                        <div className="form-group"> {/* Group for skills input */}
                            <label htmlFor="skills">Skills:</label>
                            <input
                                type="text"
                                id="skills"
                                value={skills}
                                onChange={(e) => setSkills(e.target.value)} // Update skills state
                                placeholder="E.g. Frontend, Backend"
                            />
                        </div>
                        <button type="submit" className="submit-button"> 
                            Save Changes
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
