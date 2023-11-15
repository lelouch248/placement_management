const originalArray = [
  "Sl No",
  "USN",
  "Name",
  "Gender",
  "Branch",
  "Phone Number",
  "Company",
  "Package",
];

const trimmedArray = originalArray.map((element) => {
  return element.replace(/\s/g, ""); // Using regex to remove whitespaces
});

console.log(trimmedArray);
