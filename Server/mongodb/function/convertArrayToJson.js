const convertArrayToJson = (dataArray, attributes) => {
  const studentsArray = dataArray.map((studentArray) => {
    // Convert the inner array to an object with named attributes
    const studentObject = Object.fromEntries(
      studentArray.map((value, index) => [attributes[index], value])
    );

    return studentObject;
  });
  return studentsArray;
};

module.exports = convertArrayToJson;
