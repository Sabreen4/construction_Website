import React, { useState } from 'react';
import axios from 'axios';
import './login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/login', { username, password });

            // Store the token in localStorage
            localStorage.setItem('token', response.data.token);

            // Redirect to the home page
            navigate('/');
        } catch (error) {
            console.error('Login error:', error);
            alert('Invalid username or password');
        }
    };

    return (
        <div className="login-container">
            <div className="logo-container">
                <img src={require('./conslogo.jpg')} alt="Logo" className="logo" />
            </div>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
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
                <button type="submit">Login</button>
            </form>
            <div className="signup-prompt">
                <p>Don't have an account? <span className="signup-link" onClick={() => navigate('/signup')}>Sign up</span></p>
            </div>
        </div>
    );
};

export default Login;
