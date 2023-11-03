import { useDropzone } from "react-dropzone";
import "./../styling/Upload.css";
import { useState } from "react";
import PropTypes from "prop-types";
import { read, utils } from "xlsx";

const FileUploader = ({ onSelectFile }) => {
	const [fileSelected, setFileSelected] = useState(false);
	// const [excelData, setExcelData] = useState([]);

	const onDrop = (acceptedFiles) => {
		const file = acceptedFiles[0];
		const reader = new FileReader();

		reader.onload = (e) => {
			const data = new Uint8Array(e.target.result);
			const workbook = read(data, { type: "array" });
			const sheetName = workbook.SheetNames[0];
			const worksheet = workbook.Sheets[sheetName];
			const parsedData = utils.sheet_to_json(worksheet, { header: 1 });

			// setExcelData(parsedData);
			setFileSelected(true);
			console.log("File selected in upload:", fileSelected);
			console.log("Excel data:", parsedData);
			onSelectFile({fileSelected: true, excelData: parsedData });
		};

		reader.readAsArrayBuffer(file);
	};

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		accept:
			".csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
	});

	return (
		<div className="file-upload-container">
			<div {...getRootProps()} className="dropzone">
				<input {...getInputProps()} />
				<p>Drag a drop a CSV or Excel file here, or click to select files</p>
			</div>
		</div>
	);
};

FileUploader.propTypes = {
	onSelectFile: PropTypes.func.isRequired,
};

export default FileUploader;
