import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import toast from 'react-hot-toast';
import { FiUser, FiLock } from 'react-icons/fi';
import { LoginContainer, LoginForm } from './styles/Login.styles';

const VALID_CREDENTIALS = {
  username: "naval.ravikant",
  password: "05111974"
};

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUser } = useApp();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (username === VALID_CREDENTIALS.username && 
        password === VALID_CREDENTIALS.password) {
      setUser({ username, isAuthenticated: true });
      toast.success('Successfully logged in!');
      navigate('/booking');
    } else {
      toast.error('Invalid username or password');
      setPassword('');
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleLogin}>
        <div className="header">
          <h1>Welcome Back</h1>
          <p>Please sign in to continue</p>
        </div>

        <div className="input-group">
          <label>Username</label>
          <div className="input-wrapper">
            <FiUser className="icon" />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              autoComplete="username"
              required
            />
          </div>
        </div>

        <div className="input-group">
          <label>Password</label>
          <div className="input-wrapper">
            <FiLock className="icon" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />
          </div>
        </div>

        <button type="submit">
          Sign In
        </button>
      </LoginForm>
    </LoginContainer>
  );
} 