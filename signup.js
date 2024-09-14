import React, { useState } from 'react';
import axios from 'axios';
import './signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:5000/signup', { username, password });
            alert('Signup successful! You can now login.');
            navigate('/login');
        } catch (error) {
            console.error('Signup error:', error);
            alert('Error during signup. Please try again.');
        }
    };

    return (
        <div className="signup-container">
            <div className="logo-container">
                <img src={require('./conslogo.jpg')} alt="Logo" className="logo" />
            </div>
            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
               
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
            <div className="login-prompt">
                <p>Already have an account? <span className="login-link" onClick={() => navigate('/login')}>Login</span></p>
            </div>
        </div>
    );
};

export default Signup;
