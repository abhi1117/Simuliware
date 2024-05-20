import React from "react";
import axios from "axios";
import "./Paymentform.css"; // Import the same CSS file used for Login

class PaymentForm extends React.Component {
  handlePayment = async () => {
    var name = prompt("Enter your name:");
    var email = prompt("Enter your email:");
    var amount = 5000; // Set the amount to 5000 Rs for yearly subscription
    var plan = "Yearly Subscription"; // Set the plan name

    if (name && email) {
      try {
        const response = await axios.post("/api/payment", {
          name: name,
          email: email,
          amount: amount,
          plan: plan,
        });
        // Handle successful payment
        alert("Payment successful!");
        // You can redirect the user to a success page here
      } catch (error) {
        // Handle payment error
        alert("Payment failed. Please try again.");
      }
    } else {
      alert("Name and email are required for payment.");
    }
  };

  render() {
    return (
      <div className="login-container">
        <form className="login-form" onSubmit={this.handlePayment}>
          <h2>Payment Form</h2>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <button type="submit" className="submit-button">
            Pay with Razorpay
          </button>
        </form>
      </div>
    );
  }
}

export default PaymentForm;
