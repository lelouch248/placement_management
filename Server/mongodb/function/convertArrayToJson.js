const convertArrayToJson = (dataArray, attributes) => {
  var filteredArray = dataArray.filter(
    (value) => Object.keys(value).length !== 0
  );

  const trimmedAttributes = attributes.map((element) => {
    return element.replace(/\s/g, ""); // Using regex to remove whitespaces
  });

  const studentsArray = filteredArray.map((studentArray) => {
    // Convert the inner array to an object with named attributes
    const studentObject = Object.fromEntries(
      studentArray.map((value, index) => [trimmedAttributes[index], value])
    );
    return studentObject;
  });
  console.log(trimmedAttributes);
  return studentsArray;
};



module.exports = convertArrayToJson;
