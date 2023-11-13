const Student = require("./../modals/studentDetail");

const getStudentData = async () => {
  const studentData = await Student.find();
  console.log("Data received from database");
  return studentData;
};

module.exports = getStudentData;
