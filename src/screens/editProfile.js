import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import "../styles/editProfile.css"; // Import the CSS file

export function EditProfile() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [topics, setTopics] = useState("");
    const [skills, setSkills] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await fetch("http://localhost:4000/users/me", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setFirstName(data.firstName);
                    setLastName(data.lastName);
                    setEmail(data.email);
                    setTopics(data.topics);
                    setSkills(data.skills);
                } else {
                    setError("Failed to load user data.");
                }
            } catch (err) {
                setError("Something went wrong while fetching user data.");
            }
        };

        fetchUserData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("token");
            const response = await fetch("http://localhost:4000/users/me", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    topics,
                    skills,
                }),
            });

            if (response.ok) {
                setSuccess("Profile updated successfully.");
                setError("");
                localStorage.setItem("firstName", firstName);
                localStorage.setItem("lastName", lastName);
                navigate('/dashboard');
            } else {
                const data = await response.json();
                setError(data.message || "Failed to update profile.");
                setSuccess("");
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
            setSuccess("");
        }
    };

    return (
        <>
            <Navbar />
            <div className="edit-profile-container">
                <div className="edit-profile-card">
                    <h2>Edit Profile</h2>
                    {error && <p className="error-message">{error}</p>}
                    {success && <p className="success-message">{success}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="firstName"></label>
                            <input
                                type="text"
                                id="firstName"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName"></label>
                            <input
                                type="text"
                                id="lastName"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email"></label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="topics">Topics:</label>
                            <input
                                type="text"
                                id="topics"
                                value={topics}
                                onChange={(e) => setTopics(e.target.value)}
                                placeholder="E.g. JavaScript, React"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="skills">Skills:</label>
                            <input
                                type="text"
                                id="skills"
                                value={skills}
                                onChange={(e) => setSkills(e.target.value)}
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
