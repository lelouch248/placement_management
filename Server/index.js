const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB Atlas
// mongoose.connect("YOUR_MONGODB_URI", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "MongoDB connection error:"));
// db.once("open", () => {
//   console.log("Connected to MongoDB");
// });

// Example route - replace this with your routes
app.get("/api/data", (_, res) => {
  // Perform database operations here using mongoose
  res.json({ message: "Data from MongoDB" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
