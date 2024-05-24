// MotionArtComponent.js

import React from "react";
import Section from "./constant.js/motionarteffect-img11.png";
import Page from "./constant.js/motionarteffect-img10.png";

function Apply() {
  return (
    <div className="mt-36  text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl md:text-4xl font-semibold text-center mb-8 w-[40%] -mt-28 text-[#EEE5FF]">
        Apply On Any Section Or Enable For Whole Page
      </h1>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-10 mx-[8%] ">
        <div className=" bg-[#0F0821] rounded-lg p-6 flex-1 -mt-10 mb-20 text-[#EEE5FF] border border-gray-50 border-solid shadow-lg ">
          <h2 className="text-xl font-semibold mb-4 ">Apply On Section</h2>
          <p className="mb-4">
            Apply on section is a game-changer, offering an unparalleled way to
            manage applications directly from your website.
          </p>
          <img src={Section} />
        </div>
        <div className="bg-[#0F0821] rounded-lg p-6 flex-1 mt-64  border border-gray-50 border-solid shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Apply On Page</h2>
          <p className="mb-4">
            Take your website to new heights with Motion Art for Elementor.
            Embrace the power of motion and animation.
          </p>
          <img src={Page} />
        </div>
      </div>
    </div>
  );
}

export default Apply;
