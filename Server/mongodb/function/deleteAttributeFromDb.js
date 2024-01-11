const Student = require("./../modals/studentDetail");

const DeleteAtrributeFromDb = async (attribute) => {
  await Student.updateMany({}, { $unset: { [attribute]: 1 } });
};

module.exports = DeleteAtrributeFromDb;
