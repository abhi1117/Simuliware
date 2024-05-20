import React, { useState } from "react";
import "./userdashboard.css";

const Dashboard = () => {
  // Sample data for demonstration
  const [subscriptionHistory, setSubscriptionHistory] = useState([
    {
      Id: 1,
      StartDate: "2021-02-12",
      EndDate: "2024-07-29",
      Plan: "Premium Plan",
    },
  ]);

  return (
    <div className="table-container">
      <h3>User Profile</h3>
      <table>
        <tr>
          <td>Username: adskjvndv</td>
          <td>Email: adskjvndv@gmailcom</td>
          <td>Plan: Ultimate Plan</td>
        </tr>
      </table>
      <h3 style={{marginTop: "40px"}}>Subscription</h3>
      <table>
        <thead>
          <tr>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Plan</th>
          </tr>
        </thead>
        <tbody>
          {subscriptionHistory.map((subscription) => (
            <tr key={subscription.Id}>
              <td>{subscription.StartDate}</td>
              <td>{subscription.EndDate}</td>
              <td>{subscription.Plan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
