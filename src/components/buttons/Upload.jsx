import { useDropzone } from "react-dropzone";
import { read, utils } from "xlsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios for making HTTP requests

import "./../styling/Upload.css";

const FileUploader = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = localStorage.getItem("uploadedFileData");
    if (savedData) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const onDrop = (acceptedFiles) => {
    // we are using only one file, so we will use the first element from the array
    const file = acceptedFiles[0];
    const reader = new FileReader();
    // data processing will be done after the file is loaded
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const parsedData = utils.sheet_to_json(worksheet, { header: 1 });
      // we say this data into local storage
      axios
        .post("http://localhost:3000/api/upload-student-data", { parsedData })
        .then((response) => {
          console.log("Data sent to backend:", response.data);
          localStorage.setItem("uploadedFileData", JSON.stringify(parsedData));
          navigate("/dashboard");
        })
        .catch((error) => {
          console.error("Error sending data to the backend:", error);
        });

      navigate("/dashboard");
    };
    reader.readAsArrayBuffer(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ".csv, .xlsx",
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

export default FileUploader;
