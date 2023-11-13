// Insert data into the database
const Student = require("./../modals/studentDetail");
const clearCollection = require("./../function/clearAllStudentData");

const insertData = async (studentData) => {
  await clearCollection();

  try {
    // Loop through the sample data and save each document
    for (const data of studentData) {
      const student = new Student({
        name: data.Name,
        rollNo: data.USN,
        branch: data.Branch,
        phoneNo: data.PhoneNumber,
        
      });
      await student.save();
      console.log(`Saved: ${data.Name}`);
    }
  } catch (error) {
    console.error("Error inserting data:", error.message);
  } finally {
    console.log("Data insertion complete");
  }
};

module.exports = insertData;
