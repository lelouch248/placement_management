import AnimatedButton from "./buttons/AnimatedButton";
import { useNavigate } from "react-router-dom";
const SidebarDash = () => {
  const navigate = useNavigate();
  const handleNewFile = () => {
    localStorage.removeItem("uploadedFileData");
    navigate("/");
  };
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] ml-48 ">
      <AnimatedButton label="add new file" handleClick={handleNewFile} />
      <AnimatedButton label="download blacklist data" />
      <AnimatedButton label="download placed data" />
      <AnimatedButton label="download non placed data" />
    </div>
  );
};

export default SidebarDash;
