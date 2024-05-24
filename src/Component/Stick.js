// MotionArtComponent.js

import React from "react";
import StickImg from "./constant.js/motionarteffect-img5.png";
function Stick() {
  return (
    <div className=" text-[#EEE5FF] p-8 flex flex-col md:flex-row items-center justify-between  ml-[5%]">
      <div className="md:w-2/3">
        <h1 className="text-md md:text-3xl font-bold mb-4">
          Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
        </h1>
        <p className="text-lg mb-6">
          Motion Art for Elementor is a groundbreaking plugin that empowers you
          to effortlessly infuse your website with visually stunning motion art
          elements.
        </p>
        <a
          href="#"
          className="inline-block bg-gradient-to-r from-purple-500 to-orange-500 text-white font-semibold py-3 px-6 rounded-lg"
        >
          Purchase From Envato →
        </a>
      </div>
      <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center">
        <img src={StickImg} alt="Magic Wand Icon" className=" w-44 h-44" />
      </div>
    </div>
  );
}

export default Stick;
