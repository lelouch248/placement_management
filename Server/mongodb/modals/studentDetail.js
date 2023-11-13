const mongoose = require("mongoose");

const studentDetailSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  rollNo: {
    type: String,
    required: true,
    trim: true,
  },
  branch: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNo: {
    type: String,
    required: true,
    trim: true,
    default: "0000000000",
  },
  emailId: {
    type: String,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    required: true,
    trim: true,
    enum: ["male", "female", "non-binary", "other"],
  },

  basePacakge: {
    type: Boolean,
    required: true,
    trim: true,
    default: false,
  },
  dreamPackage: {
    type: Boolean,
    required: true,
    trim: true,
    default: false,
  },
  superDreamPackage: {
    type: Boolean,
    required: true,
    trim: true,
    default: false,
  },
  blackListed: {
    type: Boolean,
    required: true,
    trim: true,
    default: false,
  },
});

const student = mongoose.model("studentDetail", studentDetailSchema);
module.exports = student;
