import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        try {
            // Send request to backend to verify email
            const response = await fetch('http://localhost:5000/users/forgot-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }), // Only send the email
            });
    
            const data = await response.json();
    
            if (data.success) {
                setMessage('An email has been sent to update your password.');
                
                // Wait for a few seconds, then redirect to the login page
                setTimeout(() => {
                    navigate('/'); // Redirect to the home page
                }, 2000); // Redirect after 2 seconds (or adjust as needed)
            } else {
                setMessage(data.message);
            }
        } catch (error) {
            setMessage('Error: Could not verify email.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="forgot-password-page">
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Verifying...' : 'Verify'}
                </button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ForgotPasswordPage;
