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
const DeleteAtrributeFromDb = require("./mongodb/function/deleteAttributeFromDb");

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

app.delete("/api/delete/:attribute", async (req, res) => {
  const { attribute } = req.params;
  try {
    DeleteAtrributeFromDb(attribute);
    res.status(200).send(`Column ${attribute} deleted successfully.`);
  } catch (error) {
    console.error(`Failed to delete column ${attribute}.`, error);
    res.status(500).send(`Failed to delete column ${attribute}.`);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
