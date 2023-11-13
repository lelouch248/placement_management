const convertArrayToJson = (dataArray, attributes) => {
  console.log("before filtering" + dataArray.length);
  var filteredArray = dataArray.filter(
    (value) => Object.keys(value).length !== 0
  );
  console.log("after filtering " + filteredArray.length);
  const studentsArray = filteredArray.map((studentArray) => {
    // Convert the inner array to an object with named attributes
    const studentObject = Object.fromEntries(
      studentArray.map((value, index) => [attributes[index], value])
    );

    return studentObject;
  });
  return studentsArray;
};

module.exports = convertArrayToJson;
