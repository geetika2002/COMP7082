import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";

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
        // Fetch user details (assuming you have an API endpoint for this)
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await fetch("http://localhost:5000/users/me", {
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
            const response = await fetch("http://localhost:5000/users/me", {
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
                // Optional: Update local storage with new user details
                localStorage.setItem("firstName", firstName);
                localStorage.setItem("lastName", lastName);

                // Redirect to dashboard
                navigate('/dashboard');  // Adjust this path based on your actual dashboard route
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
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "100vh",
                    backgroundColor: "#f9f9f9",
                    padding: "20px",
                }}
            >
                <div
                    style={{
                        backgroundColor: "white",
                        padding: "30px",
                        borderRadius: "10px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        width: "400px",
                    }}
                >
                    <h2>Edit Profile</h2>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    {success && <p style={{ color: "green" }}>{success}</p>}
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: "15px" }}>
                            <label htmlFor="firstName">First Name:</label>
                            <input
                                type="text"
                                id="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    marginTop: "5px",
                                    borderRadius: "5px",
                                    border: "1px solid #ccc",
                                }}
                            />
                        </div>
                        <div style={{ marginBottom: "15px" }}>
                            <label htmlFor="lastName">Last Name:</label>
                            <input
                                type="text"
                                id="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    marginTop: "5px",
                                    borderRadius: "5px",
                                    border: "1px solid #ccc",
                                }}
                            />
                        </div>
                        <div style={{ marginBottom: "15px" }}>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    marginTop: "5px",
                                    borderRadius: "5px",
                                    border: "1px solid #ccc",
                                }}
                            />
                        </div>
                        <div style={{ marginBottom: "15px" }}>
                            <label htmlFor="topics">Topics:</label>
                            <input
                                type="text"
                                id="topics"
                                value={topics}
                                onChange={(e) => setTopics(e.target.value)}
                                placeholder="E.g., JavaScript, React"
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    marginTop: "5px",
                                    borderRadius: "5px",
                                    border: "1px solid #ccc",
                                }}
                            />
                        </div>
                        <div style={{ marginBottom: "15px" }}>
                            <label htmlFor="skills">Skills:</label>
                            <input
                                type="text"
                                id="skills"
                                value={skills}
                                onChange={(e) => setSkills(e.target.value)}
                                placeholder="E.g., Frontend, Backend"
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    marginTop: "5px",
                                    borderRadius: "5px",
                                    border: "1px solid #ccc",
                                }}
                            />
                        </div>
                        <button
                            type="submit"
                            style={{
                                width: "100%",
                                padding: "10px",
                                backgroundColor: "#003371",
                                color: "white",
                                borderRadius: "5px",
                                border: "none",
                                cursor: "pointer",
                            }}
                        >
                            Save Changes
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
