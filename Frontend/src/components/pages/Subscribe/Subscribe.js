import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Subscribe.css"; // Import the CSS file for styling

function Subscribe() {
  const [plan, setPlan] = useState("");
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const formData = new URLSearchParams();
      formData.append("plan", plan);

      const response = await axios.post(
        "http://localhost:8000/subscribe",
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      setAmount(response.data.amount);
      // Redirect to payment form after successful subscription
      navigate("/payment_form");
    } catch (error) {
      console.error("Error occurred during subscription:", error);
    }
  };

  return (
    <div className="subscribe-container">
      <form className="subscribe-form" onSubmit={handleSubscribe}>
        <h2>Subscription Plan</h2>
        <div className="form-group">
          <select
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
            required
          >
            <option value="">Select a plan</option>
            <option value="ultimate">Ultimate</option>
            {/* Add more plans as needed */}
          </select>
        </div>
        <button type="submit" className="subscribe-button">
          Subscribe
        </button>
      </form>
      {amount > 0 && <p className="amount">Amount to pay: ${amount}</p>}
    </div>
  );
}

export default Subscribe;
