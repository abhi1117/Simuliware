import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    console.log("Forgot Password form submitted:", { email });

    try {
      const response = await axios.post("http://127.0.0.1:8000/forgot-password", {
        email,
      });

      if (response.status === 200) {
        // Password reset link sent successfully
        console.log("Password reset link sent successfully");
        // Optionally, redirect to a confirmation page or display a message
      } else {
        // Handle error
        console.error("Failed to send password reset link");
      }
    } catch (error) {
      console.error("Error occurred during password reset request:", error);
    }
  };

  return (
    <div className="forgot-password-container">
      <form className="forgot-password-form" onSubmit={handleForgotPassword}>
        <h2>Forgot Password</h2>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{ fontSize: "16px" }}>
          Send Reset Link
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;
