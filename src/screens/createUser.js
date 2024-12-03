// Import React's useState hook to manage form state and useNavigate for navigation between routes
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Import Navbar component (not used in this file but likely part of the project)
import Navbar from '../components/navbar';
// Import axios for making HTTP requests
import axios from 'axios';
// Import user image for use in the form
import userImage from "../assests/images/logo.png";
// Import associated CSS styles for this component
import '../styles/createUser.css';

// Component for creating a new user
export function CreateUser() {
  // State to store user form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    topics: '',
    skills: '',
    resume: '',
  });
  // State to handle error messages
  const [error, setError] = useState('');
  // State to handle success messages
  const [success, setSuccess] = useState('');
  // Hook to navigate to different routes
  const navigate = useNavigate();

  // Function to handle changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target; // Extract field name and value
    setFormData((prev) => ({
      ...prev,
      [name]: value, // Update only the changed field
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default page reload on form submission
    setError('');
    setSuccess('');

    // Prepare payload: convert topics and skills from strings to arrays
    const payload = {
      ...formData,
      topics: formData.topics.split(',').map((t) => t.trim()), // Split by commas and trim whitespace
      skills: formData.skills.split(',').map((s) => s.trim()),
    };

    try {
      // Make a POST request to the backend API
      const response = await axios.post('http://localhost:4000/users', payload);

      // If user creation is successful
      if (response.status === 201) {
        setSuccess('User created successfully!');
        setTimeout(() => navigate('/login'), 2000); // Redirect to login page after 2 seconds
      }
    } catch (err) {
      // Handle errors during the request
      if (err.response) {
        // Set error message from server response
        setError(err.response.data.message || 'Failed to create user');
      } else {
        // Set generic error message for other errors
        setError('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <div>
      {/* Display logo */}
      <img src={userImage} alt="HireHero Logo" className="smalllogo" />
      <div className="wholeform">
        {/* Main form header */}
        <h1>Welcome to HireHero</h1>
        <h1 className="slogan">Suit Up for Success!</h1>

        {/* Show error or success messages */}
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        {/* User creation form */}
        <form onSubmit={handleSubmit}>
          {/* First Name field */}
          <div className="form">
            <label htmlFor="firstName"></label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          {/* Last Name field */}
          <div>
            <label htmlFor="lastName"></label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          {/* Email field */}
          <div>
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          {/* Password field */}
          <div>
            <label htmlFor="password"></label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {/* Topics field */}
          <div>
            <label htmlFor="topics">Topics:</label>
            <p className="description">Topics you would like to focus on. e.g., Java, MongoDB, Soft Skills, etc.</p>
            <p className="description2">Please separate using commas.</p>
            <input
              type="text"
              id="topics"
              name="topics"
              placeholder="Java, MongoDB, Soft Skills, etc"
              value={formData.topics}
              onChange={handleChange}
            />
          </div>
          {/* Skills field */}
          <div>
            <label htmlFor="skills">Skills:</label>
            <p className="description">Skills you would like to focus on. e.g., Interpersonal Skills, Technical Skills, etc.</p>
            <p className="description2">Please separate using commas.</p>
            <input
              type="text"
              id="skills"
              name="skills"
              placeholder="Interpersonal, Critical Thinking, etc"
              value={formData.skills}
              onChange={handleChange}
            />
          </div>
          {/* Resume link field */}
          <div>
            <label htmlFor="resume">Resume:</label>
            <p className="description">Please link your resume in the field down below.</p>
            <input
              type="text"
              id="resume"
              name="resume"
              placeholder="http://www.myresume"
              value={formData.resume}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
