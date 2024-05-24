import React from "react";

const Tranform = () => {
  return (
    <div className="flex flex-col md:flex-row text-  min-h-screen p-8">
      <div className="flex-1 flex flex-col justify-center items-start space-y-4 md:ml-10 lg:ml-20">
        <p className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">
          Transform <br /> Your Website <br /> With Motion Art Effect
        </p>
      </div>
      <div className="flex-1 flex flex-col justify-center items-start space-y-4 md:ml-10 lg:ml-20">
        <h1 className="text-4xl md:text-6xl font-bold text-[#EEE5FF]">
          Attract Your <br /> Visitors Attention <br /> With Colorful <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">
            Motion Art Effect
          </span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-400">
          Unleash the power of creativity with Motion Art for Elementor - your
          ultimate solution for seamlessly integrating captivating animations
          into your website.
        </p>
      </div>
    </div>
  );
};

export default Tranform;
