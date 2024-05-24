import React from "react";
import BrowserImg from "./constant.js/motionarteffect-img8.png";
const Browser = () => {
  return (
    <div className="p-8 rounded-xl text-center text-white m-auto">
      <h2 className=" text-3xl font-semibold mb-2">
        Supported by All Popular Browsers
      </h2>
      <p className="mb-6 text-wrap m-auto w-[33%] text-[#EEE5FFBD]">
        Rest assured, Motion Art is designed to be compatible with all major web
        browsers.
      </p>
      <div className="flex justify-center space-x-8">
        <div className="flex items-center space-x-2">
          <img src={BrowserImg} alt="Chrome" className="" />
        </div>
      </div>
    </div>
  );
};

export default Browser;
