import React from "react";
import BannerImg from "../Imgs/Banner.jpg";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div
      id="home"
      className="banner flex justify-center h-96 sm:h-screen"
      style={{
        backgroundImage: `url(${BannerImg})`,
        backgroundPosition: "80% 10%",
      }}
    >
      <div
        id="about"
        className="absolute flex justify-start flex-col gap-2 items-center text-white bottom-14 sm:bottom-28"
      >
        <h1 className="text-4xl sm:text-5xl font-semibold uppercase">Pranav</h1>
        <TypeAnimation
          sequence={[
            "Software Developer",
            3000,
            "MERN Stack",
            3000,
            "Freelancer",
            3000,
            // () => {
            //    console.log('Sequence completed');
            // },
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          className="blackbackground p-3 text-3xl sm:text-4xl font-medium inline-block"
        />
      </div>
    </div>
  );
};

export default Banner;
