import React, { useState } from 'react'; // Import React and useState hook for managing component state
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate for navigation and Link for routing
import userImage from "../assests/images/logo.png"; // Import logo image
import '../styles/login.css'; // Importing a CSS file for styling

export function Login() {
    // State hooks to manage form input values and error message
    const [email, setEmail] = useState(""); // Store email input value
    const [password, setPassword] = useState(""); // Store password input value
    const [error, setError] = useState(""); // Store error message if login fails

    // useNavigate hook to programmatically navigate to another route
    const navigate = useNavigate();

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        try {
            // Sending a POST request to the server with the email and password entered by the user
            const response = await fetch('http://localhost:4000/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Set content type to JSON
                },
                body: JSON.stringify({ email, password }), // Send email and password as JSON in the body of the request
            });

            // Parse the response as JSON
            const data = await response.json();

            // If the response is successful, store token and user details in localStorage and navigate to dashboard
            if (response.ok) {
                localStorage.setItem('token', data.token); // Store the authentication token
                localStorage.setItem('firstName', data.user.firstName); // Store the user's first name
                localStorage.setItem('lastName', data.user.lastName); // Store the user's last name
                navigate('/dashboard'); // Redirect to the dashboard page
            } else {
                // If login failed, set the error message
                setError(data.message || 'Login failed');
            }
        } catch (err) {
            // Handle any errors that occur during the request (e.g., network errors)
            setError('Something went wrong. Please try again.');
        }
    };

    return (
        <div>
            {/* Logo placed outside of login-container */}
            <img src={userImage} alt="HireHero Logo" className="smalllogo" />

            <div className="login-container">
                {/* Login form container */}
                <div className="login-form">
                    <h2>Login to Your Account</h2>
                    {/* Display error message if there is one */}
                    {error && <p className="error">{error}</p>}
                    {/* Form for login with email and password fields */}
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email" // Input field for email
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Update email state on input change
                            required
                        />
                        <input
                            type="password" // Input field for password
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // Update password state on input change
                            required
                        />
                        <button type="submit" className="login-btn">Login</button> {/* Submit button for login */}
                    </form>
                </div>

                {/* Sign up section for new users */}
                <div className="signup-section">
                    <h3>New Here?</h3>
                    <p>Sign Up and discover a variety of opportunities</p>
                    {/* Link to sign-up page */}
                    <Link to="/create" className="signup-btn">Sign Up</Link>
                </div>
            </div>
        </div>
    );
}
