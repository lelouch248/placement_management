import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import PropTypes from "prop-types";
import DeleteModal from "./DeleteModal";
import "./styling/dashboard.css";

const DashboardTable = ({ excelData }) => {
  // Delete logic
  const [isDeleteButtonShown, setDeleteButtonShown] = useState(false);
  const [columnToDelete, setColumnToDelete] = useState(-1);
  const [showModal, setShowModal] = useState(false);

  const handleMouseEnter = (columnNumber) => {
    setDeleteButtonShown(true);
    setColumnToDelete(columnNumber);
  };

  const handleMouseLeave = () => {
    setDeleteButtonShown(false);
    setColumnToDelete(-1);
  };

  const handleDeleteColumn = (index) => {
    // Here you can add your MongoDB delete logic
    console.log("Delete column:", index);
    setShowModal(false);
  };

  return (
    <>
      <TableContainer
        style={{ height: "70vh", overflowY: "auto" }}
        className="tableContainer">
        <Table>
          <TableHead>
            <TableRow>
              {excelData.length > 0 &&
                excelData[0].map((header, i) => (
                  <TableCell
                    key={i}
                    className="table-cell"
                    onMouseEnter={handleMouseEnter.bind(this, i)}
                    onMouseLeave={handleMouseLeave}>
                    {isDeleteButtonShown && columnToDelete === i ? (
                      <DeleteIcon
                        className="delete-icon"
                        onClick={() => setShowModal(true)}
                      />
                    ) : (
                      header
                    )}
                  </TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {excelData.slice(1).map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <TableCell key={cellIndex}>{cell}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {showModal && (
        <DeleteModal
          showModal={showModal}
          handleClose={() => setShowModal(false)}
          handleDelete={() =>
            handleDeleteColumn(columnToDelete, columnToDelete)
          }
        />
      )}
    </>
  );
};

DashboardTable.propTypes = {
  excelData: PropTypes.array.isRequired,
};

export default DashboardTable;
