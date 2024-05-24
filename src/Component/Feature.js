import React from "react";
import ThunderImg from "./constant.js/motionarteffect-img9.png";
import ThumbImg from "./constant.js/motionarteffect-img6.png";
import MoonImg from "./constant.js/motionarteffect-img7.png";

const Feature = () => {
  return (
    <div className=" text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-[39%]">
        <h2 className="text-xl font-semibold sm:text-4xl text-[#EEE5FF]">
          An All-Round Plugin With Powerful Features
        </h2>
        <p className="mt-4 text-md  leading-6 text-[#EEE5FFBD]">
          Whether you're a seasoned web designer or just starting out, Motion
          Art for Elementor seamlessly integrates with the Elementor platform,
          providing you with a seamless and intuitive experience.
        </p>
      </div>
      <div className="mt-12 max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1C152C] rounded-lg p-6 ">
          <img src={ThunderImg} alt="Light Weight" className=" mb-4" />
          <h3 className="text-xl font-semibold  ">Light Weight</h3>
          <p className="mt-2 text-zinc-400 ">
            Motion Art for Elementor is designed to be lightweight.
          </p>
        </div>
        <div className="bg-[#1C152C] rounded-lg p-6 ">
          <img src={ThumbImg} alt="100% Responsive" className=" mb-4" />
          <h3 className="text-xl font-semibold">100% Responsive</h3>
          <p className="mt-2 text-zinc-400">
            Create a consistent visual experience across all devices.
          </p>
        </div>
        <div className="bg-[#1C152C] rounded-lg p-6 ">
          <img src={MoonImg} alt="User Friendly Interface" className=" mb-4" />
          <h3 className="text-xl font-semibold">User Friendly Interface</h3>
          <p className="mt-2 text-zinc-400">
            Ensure a smooth experience for both applicants and administrators.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
