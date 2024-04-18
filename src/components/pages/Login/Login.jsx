import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Ensure your CSS is updated to handle the new layout


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    console.log('Login form submitted:', { email, password, rememberMe });
    // Implement your login logic here
  };

  const handleRememberMeChange = e => {
    setRememberMe(e.target.checked);
  };

  const navigateToForgotPassword = () => {
    navigate('/forgot-password'); // Adjust as per your route for forgot password
  };

  const navigateToRegister = () => {
    navigate('/register'); // Adjust as per your route for sign up
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2 className="form-title">Login</h2>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-options">
          <div className="checkbox-group">
            <input
              id="rememberMe"
              type="checkbox"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          <button type="button" className="link-button" onClick={navigateToForgotPassword}>
            Forgot Password?
          </button>
        </div>
        <button type="submit" className="submit-button">Login</button>
        <div className="sign-up-prompt">
          Need An Account? <button type="button" className="link-button" onClick={navigateToRegister}>Sign Up Now</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
