const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const PORT = 3000;

// file imports
const connectDB = require("./mongodb/connection");
const convertArrayToJson = require("./mongodb/function/convertArrayToJson");
const insertData = require("./mongodb/function/insertStudentData");
const getStudentData = require("./mongodb/function/getStudentData");

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes

app.post("/api/upload-student-data", async (req, res) => {
  const { parsedData } = req.body;
  const studentData = convertArrayToJson(parsedData.slice(1), parsedData[0]);

  // Insert data into the database
  insertData(studentData);
  res.json({ message: "Data received" });
});

app.get("/api/get-student-data", async (_, res) => {
  const studentData = await getStudentData();
  res.json(studentData);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
