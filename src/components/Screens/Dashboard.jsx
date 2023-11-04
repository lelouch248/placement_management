import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import PropTypes from "prop-types";
import "./../styling/Dashboard.css";
import SearchBar from "../buttons/Search";
import Checkbox from "../buttons/Checkbox";
import SidebarDash from "../SidebarDash";

const Dashboard = ({ excelData }) => {
  // sample search result
  const onSearch = (searchTerm) => {
    console.log(searchTerm);
  };
  if (excelData.length > 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-row items-stretch">
          <SearchBar onSearch={onSearch} />
          <Checkbox label="4 - 8 CTC" checked={false} onChange={() => {}} />
          <Checkbox label="8 - 12 CTC" checked={false} onChange={() => {}} />
          <Checkbox label="12 - 50 CTC" checked={false} onChange={() => {}} />
        </div>
        <div className="flex flex-row justify-items-end">
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
          <SidebarDash />
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
