import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // var cors = require("cors");
  // app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Registration form submitted:", {
      username,
      email,
      password,
    });

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/register",
        { username, email, password },
        {
          // headers: { "Content-Type": "application/json" }
        }
      );

      if (response.status === 200) {
        // Registration successful, redirect to login
        navigate("/login");
      } else {
        // Handle registration error
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error occurred during registration:", error);
    }
  };

  const handleSignIn = () => {
    navigate("/login");
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
            placeholder="Username"
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
        </div>
        <button type="submit" style={{ fontSize: "16px" }}>
          Sign Up
        </button>
        <p className="sign-in-link">
          Already Have An Account? <span onClick={handleSignIn}>Sign In</span>
        </p>
      </form>
    </div>
  );
}

export default Register;
