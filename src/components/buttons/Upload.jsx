import { useDropzone } from "react-dropzone";
import { read, utils } from "xlsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./../styling/Upload.css";

const FileUploader = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check local storage for saved file data
    const savedData = localStorage.getItem("uploadedFileData");
    if (savedData) {
      // If data exists in local storage, use it
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
      localStorage.setItem("uploadedFileData", JSON.stringify(parsedData));
    };
    reader.readAsArrayBuffer(file);
    navigate("/dashboard");
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

export default FileUploader;
