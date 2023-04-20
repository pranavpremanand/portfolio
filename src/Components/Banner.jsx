import React from "react";
import BannerImg from "../Imgs/Banner.jpg";
import { TypeAnimation } from "react-type-animation";
// import Resume from "../Files/Pranav.M-Resume.pdf";

const Banner = () => {
  return (
    <div
      id="home"
      className="relative before:bg-neutral-700/25 dark:before:bg-gray-900/25 banner flex justify-center h-96 sm:h-screen"
      style={{
        backgroundImage: `url(${BannerImg})`,
        backgroundPosition: "80% 10%",
      }}
    >
      <div className="absolute flex justify-start flex-col gap-2 items-center text-white bottom-14 sm:bottom-28">
        <h1 className="text-4xl sm:text-5xl font-semibold uppercase">Pranav</h1>
        <TypeAnimation
          sequence={[
            "Software Developer",
            4000,
            "MERN Stack",
            4000,
            "Freelancer",
            4000,
            // () => {
            //    console.log('Sequence completed');
            // },
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          className="text-3xl sm:text-4xl font-medium inline-block"
        />
      </div>
      {/* <div className="absolute gap-6 flex w-40 justify-center text-white bottom-14">
        <button className="hover:bg-gray-600 outline outline-1 outline-gray-600 bg-gray-800 transition ease-in-out duration-300 w-40 justify-center text-md font-medium flex items-center gap-1 py-2 px-2 rounded-sm">
          <a
            className="flex items-center gap-1"
            href={Resume}
            download="Pranav M - Resume"
          >Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M2 4.75C2 3.784 2.784 3 3.75 3h4.836c.464 0 .909.184 1.237.513l1.414 1.414a.25.25 0 00.177.073h4.836c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0116.25 17H3.75A1.75 1.75 0 012 15.25V4.75zm8.75 4a.75.75 0 00-1.5 0v2.546l-.943-1.048a.75.75 0 10-1.114 1.004l2.25 2.5a.75.75 0 001.114 0l2.25-2.5a.75.75 0 10-1.114-1.004l-.943 1.048V8.75z"
                clip-rule="evenodd"
              />
            </svg>{" "}
          </a>
        </button>
        <div className="hover:bg-gray-600 outline outline-1 outline-gray-600 bg-gray-800 transition ease-in-out duration-300 w-40 justify-center text-md font-medium flex items-center gap-1 py-2 px-2 rounded-sm">Contact</div>
      </div> */}
    </div>
  );
};

export default Banner;
