import React from "react";
import GreenImg from "./constant.js/motionarteffect-img2.png";
import wImg from "./constant.js/motionarteffect-img3.png";
import gImg from "./constant.js/motionarteffect-img1.png";
import starImg from "./constant.js/motionarteffect-img4.png";

const starRating = (
  <div className="flex items-center mb-2">
    <img src={starImg} alt="Star" />
  </div>
);

const logoCard = (logoSrc, altText) => (
  <div className="p-4 flex items-center">
    <div className="">
      <img src={logoSrc} alt={altText} className="mb-4" />
    </div>

    <div className="px-6">
      {starRating}
      <p className="text-lg">
        <span className="font-bold text-lg">4.5</span> Score, 9 Reviews
      </p>
    </div>
  </div>
);

const TrustedUsersSection = () => {
  const logos = [
    { src: GreenImg, alt: "Logo 1" },
    { src: wImg, alt: "Logo 2" },
    { src: gImg, alt: "Logo 3" },
  ];

  return (
    <div className="text-[#EEE5FF] py-8">
      <div className="text-center mb-8">
        <h2 className="text-xl font-semibold">
          Trusted by thousands of users around the world
        </h2>
      </div>
      <div className="flex flex-wrap justify-center md:justify-center mx-auto max-w-6xl">
        {logos.map((logo, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3">
            {logoCard(logo.src, logo.alt)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedUsersSection;
