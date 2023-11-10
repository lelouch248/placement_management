// db.js

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://Karthik:karthik@cluster0.fohsgzm.mongodb.net/placementDB",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(
      `Connected to Mongo! Database name: "${connection.connections[0].name}"`
    );
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectDB;
