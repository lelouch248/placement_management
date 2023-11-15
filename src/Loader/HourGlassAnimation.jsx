import Lottie from "react-lottie";
import animationData from "./Data/HourGlassAnimation.json";
const HourGlassAnimation = () => {
  console.log(animationData);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData, // JSON animation file imported above
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div className="flex flex-col justify-center">
        <Lottie options={defaultOptions} height={200} width={200} />
      </div>
    </>
  );
};

export default HourGlassAnimation;
