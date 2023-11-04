import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import PropTypes from "prop-types";
import "./../styling/Dashboard.css";

const Dashboard = ({ excelData }) => {
  if (excelData.length > 0) {
    return (
      <div className="flex items-center justify-center h-screen Dashboard">
        <div className="w-full max-w-3xl p-6 bg-gray-100 rounded-lg">
          <TableContainer style={{ height: "70vh", overflowY: "auto" }}>
            <Table>
              <TableHead>
                <TableRow>
                  {excelData.length > 0 &&
                    excelData[0].map((header, i) => (
                      <TableCell key={i}>{header}</TableCell>
                    ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {excelData.map((row, i) => (
                  <TableRow key={i}>
                    {row.map((cell, i) => (
                      <TableCell key={i}>{cell}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    );	
  } else {
    return (
      <div className="flex items-center justify-center h-screen Dashboard">
        <div className="w-full max-w-3xl p-6 bg-gray-100 rounded-lg">
          <h1 className="text-2xl font-bold text-center">No data to display</h1>
        </div>
      </div>
    );
  }
};

Dashboard.propTypes = {
  excelData: PropTypes.array.isRequired,
};

export default Dashboard;
