import React from "react";
import loadingDots from "../../../../public/dots.json";
import Lottie from "lottie-react";

// Loading state Spinner
const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-68px)]">
      <p className="text-9xl font-semibold">L</p>
      <div className="w-20 h-20 border-[14px] border-dashed rounded-full animate-spin mt-5 border-primary"></div>
      <p className="text-9xl font-semibold">ading</p>
      <Lottie animationData={loadingDots} />
    </div>
  );
};

export default Spinner;
