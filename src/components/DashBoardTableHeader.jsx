import PropTypes from "prop-types";
import { TableRow, TableCell } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const DashBoardTableHeader = ({
  isDeleteButtonShown,
  columnToDelete,
  setColumnToDelete,
  handleMouseLeave,
  handleMouseEnter,
  studentAttributes,
  setShowModal,
}) => {
  return (
    <TableRow>
      {studentAttributes
        .slice(1, studentAttributes.length - 1)
        .map((header, i) => (
          <TableCell
            key={i}
            className="font-bold size-14"
            onMouseEnter={handleMouseEnter.bind(this, i)}
            onMouseLeave={handleMouseLeave}>
            {isDeleteButtonShown && columnToDelete === i ? (
              <DeleteIcon
                className="delete-icon"
                onClick={() => {
                  setColumnToDelete(i);
                  setShowModal(true);
                }}
              />
            ) : (
              header
            )}
          </TableCell>
        ))}
    </TableRow>
  );
};

DashBoardTableHeader.propTypes = {
  isDeleteButtonShown: PropTypes.bool.isRequired,
  columnToDelete: PropTypes.number.isRequired,
  setColumnToDelete: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
  handleMouseEnter: PropTypes.func.isRequired,
  setShowModal: PropTypes.func.isRequired,
  studentAttributes: PropTypes.array.isRequired,
};

export default DashBoardTableHeader;
