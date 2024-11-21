import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import axios from 'axios';  // Import axios

export function CreateUser() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    topics: '',
    skills: '',
    resume: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setError('');
    setSuccess('');

    // Prepare topics and skills as arrays
    const payload = {
      ...formData,
      topics: formData.topics.split(',').map((t) => t.trim()),
      skills: formData.skills.split(',').map((s) => s.trim()),
    };

    try {
      // Make POST request using axios
      const response = await axios.post('http://localhost:5000/users', payload);

      if (response.status === 201) {
        setSuccess('User created successfully!');
        setTimeout(() => navigate('/login'), 2000); // Redirect to login after 2 seconds
      }
    } catch (err) {
      // Handle error response
      if (err.response) {
        setError(err.response.data.message || 'Failed to create user');
      } else {
        setError('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Create User</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="topics">Topics (comma-separated):</label>
          <input
            type="text"
            id="topics"
            name="topics"
            value={formData.topics}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="skills">Skills (comma-separated):</label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="resume">Resume (URL):</label>
          <input
            type="text"
            id="resume"
            name="resume"
            value={formData.resume}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
}
