import React from "react";
import LoadingAnimation from "../Assets/Cube-1s-200px.svg";

const Loading = () => {
  return (
    <div className="min-h-[calc(100vh-150px)] grid place-items-center">
      <img
        src={LoadingAnimation}
        alt="Loading Animation"
        className="w-12 h-12"
      />
    </div>
  );
};

export default Loading;
