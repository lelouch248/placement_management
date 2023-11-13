const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const PORT = 3000;

// file imports
const connectDB = require("./mongodb/connection");
const Student = require("./mongodb/modals/studentDetail");
const clearCollection = require("./mongodb/function/clearAllStudentData");
const convertArrayToJson = require("./mongodb/function/convertArrayToJson");
// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Connect to MongoDB
connectDB();

// Example route - replace this with your routes
app.get("/api/data", (_, res) => {
  // Perform database operations here using mongoose
  res.json({ message: "Data from MongoDB" });
});

// Insert data into the database
// const insertData = async (studentData) => {
//   try {
//     // Loop through the sample data and save each document
//     clearCollection();
//     for (const data of sampleData) {
//       const student = new Student(data);
//       await student.save();
//       console.log(`Saved: ${data.name}`);
//     }
//   } catch (error) {
//     console.error("Error inserting data:", error.message);
//   } finally {
//     // Disconnect from MongoDB Atlas after saving data
//     mongoose.disconnect();
//   }
// };

app.post("/api/upload-student-data", (req, res) => {
  const { parsedData } = req.body;
  clearCollection();
  // data preprocessing
  const studentData = convertArrayToJson(parsedData.slice(1), parsedData[0]);
  console.log("Data received from frontend:", studentData);
  // Insert data into the database
  
  res.json({ message: "Data received" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
