import React from "react";
import GreenImg from "./constant.js/motionarteffect-img2.png";

const Header = () => {
  return (
    <div className="flex p-2  bg-[#262626] h-[54px] mg-1px justify-between sticky top-0 z-[100]">
      <div className="top-20 flex  ">
        <img src={GreenImg} alt="motionarteffect-img2" />
        <h2 className="text-xl text-[#82B440]">envatomarket</h2>
      </div>
      <div className="mt-[.13rem] mr-2">
        <button className="bg-[#82b440] px-5 rounded-md h-8 text-center text-white">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default Header;
