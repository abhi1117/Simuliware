// Import the Express module
const express = require("express");
// Create an instance of Express
const app = express();
// Define a route
app.get("/register", (req, res) => {
  res.send("Registration successful!");
});
// Start the server
const port = process.env.PORT || 3001; // Use the provided port or default to 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
