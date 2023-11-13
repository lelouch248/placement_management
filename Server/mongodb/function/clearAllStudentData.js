const Student = require("./../modals/studentDetail");

const clearCollection = async () => {
  try {
    const result = await Student.deleteMany({});
    console.log(
      `Deleted ${result.deletedCount} documents from the 'students' collection`
    );
  } catch (error) {
    console.error("Error clearing collection:", error.message);
  }
};

module.exports = clearCollection;
