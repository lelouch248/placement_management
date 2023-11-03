import FileUploader from "./buttons/Upload";
import { useState } from "react";
import Dashboard from "./Screens/Dashboard";
import "./styling/home.css";

const Home = () => {
	const [fileSelected, setFileSelected] = useState(false);
	const [excelData, setExcelData] = useState([]);
	const handleFileSelect = ({ fileSelected, excelData }) => {
		// Use the file and fileSelected boolean in the parent component
		setExcelData(excelData);
		setFileSelected(fileSelected);
	};

	const currentScreen = fileSelected ? (
		<Dashboard excelData={excelData} />
	) : (
		<FileUploader onSelectFile={handleFileSelect} />
	);

	console.log(currentScreen);
	return <div className="home">{currentScreen}</div>;
};
export default Home;
