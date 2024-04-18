import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Import CSS file for styling

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Registration form submitted:', { username, email, password, confirmPassword });
    // Implement your registration logic here

    // Redirect to login page after successful registration
    navigate('/login');
  };

  const handleSignIn = () => {
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleRegister}>
        <h2>Register Now</h2>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" width="auto" >Sign Up</button>
        <p className="sign-in-link">
          Already Have An Account? <span onClick={handleSignIn}>Sign In</span>
        </p>
      </form>
    </div>
  );
}

export default Register;
