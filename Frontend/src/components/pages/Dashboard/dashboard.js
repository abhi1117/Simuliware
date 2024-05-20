import React, { useState } from "react";
import "./dashboard.css"; // Import the CSS file

const Dashboard = () => {
  // Sample data for demonstration
  const [subscriptions, setSubscriptions] = useState([
    {
      Id: 1,
      CustomerName: "Rohit",
      Services: "Premium Plan",
      Validity: "1 month",
      Payment_Status: "Paid",
    },
    {
      Id: 2,
      CustomerName: "Anil",
      Services: "Premium Plan",
      Validity: "3 months",
      Payment_Status: "Paid",
    },
    {
      Id: 3,
      CustomerName: "Shyam",
      Services: "Premium Plan",
      Validity: "6 months",
      Payment_Status: "Paid",
    },
    {
      Id: 4,
      CustomerName: "Mohit",
      Services: "Premium Plan",
      Validity: "3 months",
      Payment_Status: "Paid",
    },
    {
      Id: 5,
      CustomerName: "Bhaskar",
      Services: "Premium Plan",
      Validity: "1 months",
      Payment_Status: "Paid",
    },
    {
      Id: 6,
      CustomerName: "Prathmesh",
      Services: "Premium Plan",
      Validity: "3 months",
      Payment_Status: "Paid",
    },
  ]);

  return (
    <div className="table-container">
      <h3 style={{ textAlign: "center", margin: 10, marginRight: 20 }}>
        Admin Dashboard
      </h3>
      <table>
        <thead>
          <tr className="headmain">
            <th>Sr.No.</th>
            <th>Customer Name</th>
            <th>Services Subscribed</th>
            <th>Validity</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {subscriptions.map((subscription) => (
            <tr key={subscription.Id}>
              <td>{subscription.Id}</td>
              <td>{subscription.CustomerName}</td>
              <td>{subscription.Services}</td>
              <td>{subscription.Validity}</td>
              <td>{subscription.Payment_Status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
