import AnimatedButton from "./buttons/AnimatedButton";
const SidebarDash = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] ">
      <AnimatedButton label="add new file" />
      <AnimatedButton label="download blacklist data" />
      <AnimatedButton label="download placed data" />
      <AnimatedButton label="download non placed data" />
    </div>
  );
};

export default SidebarDash;
