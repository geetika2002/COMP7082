import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import userImage from "../assests/images/logo.png";
import '../styles/login.css'; // Importing a CSS file for styling

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('firstName', data.user.firstName);
        localStorage.setItem('lastName', data.user.lastName);
        navigate('/dashboard');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div>
      {/* Logo placed outside of login-container */}
      <img src={userImage} alt="HireHero Logo" className="smalllogo" />
      
      <div className="login-container">
        <div className="login-form">
          <h2>Login to Your Account</h2>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="login-btn">Login</button>
          </form>
        </div>
        <div className="signup-section">
          <h3>New Here?</h3>
          <p>Sign Up and discover a variety of opportunities</p>
          <Link to="/create" className="signup-btn">Sign Up</Link>
        </div>
      </div>
    </div>
  );
  
}
