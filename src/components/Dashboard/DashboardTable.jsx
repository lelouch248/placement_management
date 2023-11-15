import { Table, TableBody, TableContainer, TableHead } from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";
import DeleteModal from "../DeleteModal";
import DashboardTableBodyCell from "./DashboardTableBodyCells";
import DashBoardTableHeader from "./DashBoardTableHeader";
import "./styling/dashboard.css";

const DashboardTable = ({ excelData }) => {
  // global varibales
  const studentAttributes = Object.keys(excelData[0]);

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
  };

  const handleDeleteColumn = (index) => {
    // Here you can add your MongoDB delete logic
    console.log("Delete :", index);
    setShowModal(false);
    setColumnToDelete(-1);
  };

  return (
    <>
      <TableContainer
        style={{ height: "70vh", overflowY: "auto" }}
        className="tableContainer">
        <Table>
          <TableHead>
            <DashBoardTableHeader
              isDeleteButtonShown={isDeleteButtonShown}
              columnToDelete={columnToDelete}
              setColumnToDelete={setColumnToDelete}
              handleMouseLeave={handleMouseLeave}
              handleMouseEnter={handleMouseEnter}
              studentAttributes={studentAttributes}
              setShowModal={setShowModal}
            />
          </TableHead>
          <TableBody>
            {excelData.map((data, dataIndex) => (
              <DashboardTableBodyCell
                key={dataIndex}
                data={data}
                dataIndex={dataIndex}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {showModal && (
        <DeleteModal
          showModal={showModal}
          handleClose={() => setShowModal(false)}
          handleDelete={() => {
            handleDeleteColumn(columnToDelete);
          }}
        />
      )}
    </>
  );
};

DashboardTable.propTypes = {
  excelData: PropTypes.array.isRequired,
};

export default DashboardTable;
