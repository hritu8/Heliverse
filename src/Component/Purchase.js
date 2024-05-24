import React from "react";
import Motion from "./constant.js/MotionArtEffect-logo.png";

const Purchase = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mt-9">
      <div className="md:ml-40 mb-4 md:mb-0">
        <img src={Motion} alt="MotionArtEffect" />
      </div>
      <div className="md:mr-40">
        <button className="rounded-md bg-white h-14 w-[180px] p-0 text-xl hidden md:block">
          Purchase Now
        </button>
      </div>
    </div>
  );
};

export default Purchase;
