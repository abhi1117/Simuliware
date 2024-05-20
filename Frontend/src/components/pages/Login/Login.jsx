import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Login form submitted:", { username, password });

    try {
      const response = await axios.post("http://127.0.0.1:8000/login", {
        username,
        password,
      });

      if (response.status === 200) {
        // Login successful, redirect to appropriate page
        navigate("/subscribe"); // Adjust as per your route for dashboard
      } else {
        // Handle login error
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
    }
  };

  const navigateToForgotPassword = () => {
    navigate("/forgot-password"); // Adjust as per your route for forgot password
  };

  const navigateToRegister = () => {
    navigate("/register"); // Adjust as per your route for sign up
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" style={{ fontSize: "16px" }}>
          Login
        </button>
        <p className="sign-in-link">
          Forgot Password?{" "}
          <span onClick={navigateToForgotPassword}>Reset Password</span>
        </p>
        <p className="sign-in-link">
          Need an account? <span onClick={navigateToRegister}>Sign Up</span>
        </p>
      </form>
    </div>
  );
}

export default Login;
