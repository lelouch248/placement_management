const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

// file imports
const connectDB = require("./mongodb/connection");

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();
// Example route - replace this with your routes
app.get("/api/data", (_, res) => {
  // Perform database operations here using mongoose
  res.json({ message: "Data from MongoDB" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
