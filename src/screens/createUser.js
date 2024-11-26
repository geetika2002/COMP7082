import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import axios from 'axios';  // Import axios
import userImage from "../assests/images/logo.png";
import '../styles/createUser.css';


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
      <img src={userImage} alt="HireHero Logo" className="smalllogo" />
      <div className="wholeform">
      <h1>Welcome to HireHero</h1>
      <h1 className="slogan">Suit Up for Sucess!</h1>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}

      <form onSubmit={handleSubmit}>
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
        <div>
          <label htmlFor="topics">Topics:</label>
          <p className="description">Topics you would like to focus on. e.g Java, MongoDB, Soft Skills, etc.</p>
          <p className="description2">Please separate using commas.</p>
          <input
            type="text"
            id="topics"
            name="topics"
            placeholder='Java, MongoDB, Soft Skills, etc'
            value={formData.topics}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="skills">Skills:</label>
          <p className="description">Skills you would like to focus on. e.g Interpersonal Skill, Techincal Skills, etc.</p>
          <p className="description2">Please separate using commas.</p>
          <input
            type="text"
            id="skills"
            name="skills"
            placeholder='Interpersonal, Critical Thinking, etc'
            value={formData.skills}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="resume">Resume:</label>
          <p className="description">Please link your resume in the field down below.</p>
          <input
            type="text"
            id="resume"
            name="resume"
            placeholder='http://www.myresume'
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
