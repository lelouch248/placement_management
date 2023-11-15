import "./../styling/Dashboard.css";
import SearchBar from "../buttons/Search";
import Checkbox from "../buttons/Checkbox";
import SidebarDash from "../SidebarDash";
import { useEffect, useState } from "react";
import DashboardTable from "./DashboardTable";
import axios from "axios";
import HourGlassAnimation from "../../Loader/HourGlassAnimation";

const Dashboard = () => {
  const [excelData, setExcelData] = useState([]);

  const getStudentData = async () => {
    await axios
      .get("http://localhost:3000/api/get-student-data")
      .then((response) => {
        setExcelData(response.data);
      });
  };

  useEffect(() => {
    getStudentData();
  }, []);

  // sample search result
  const onSearch = (searchTerm) => {
    console.log(searchTerm);
  };

  return (
    <>
      {excelData.length !== 0 ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="flex flex-row items-stretch">
            <SearchBar onSearch={onSearch} />
            <Checkbox label="4 - 8 CTC" checked={false} onChange={() => {}} />
            <Checkbox label="8 - 12 CTC" checked={false} onChange={() => {}} />
            <Checkbox label="12 - 50 CTC" checked={false} onChange={() => {}} />
          </div>
          <div className="flex flex-row justify-items-end">
            <div className="w-full max-w-3xl p-6 bg-gray-100 rounded-lg drop-shadow-xl">
              <DashboardTable excelData={excelData} />
            </div>
            <SidebarDash />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <HourGlassAnimation className="inline-block blur-0" />
        </div>
      )}
    </>
  );
};

export default Dashboard;
