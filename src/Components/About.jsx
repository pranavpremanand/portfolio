import React, { useState } from "react";
import Profile from "../Imgs/Profile.jpg";
import Resume from "../Files/Pranav.M-Resume.pdf";

const About = () => {
  return (
    <div
      id="about"
      className="m-5 sm:m-10 p-5 sm:p-10 shadow-lg drop-shadow-md rounded-lg flex-wrap dark:shadow-slate-700 dark:bg-gray-900 shadow-slate-300 bg-gray-50"
    >
      <h1 className="uppercase text-2xl md:text-3xl md:mt-0 font-bold tracking-widest underline text-center mb-2 md-2 md:mb-5">
        about me
      </h1>
      <div className="flex flex-wrap gap-5 md:gap-10 justify-start">
        <img
          src={Profile}
          className="shadow-md dark:shadow-none dark:drop-shadow-sm drop-shadow-md shadow-slate-400 self-center lg:self-start object-fill w-full sm:w-1/2 md:w-5/12 max-w-xs mt-2 sm:mt-4 rounded-md lg:mt-0"
          alt=""
        />
        <div className="flex flex-col gap-2 mt-3 w-full md:w-7/12 justify-start">
          <div className="flex flex-wrap gap-7 font-medium text-md md:text-lg">
            <div className="hidden sm:inline">Name</div>
            <div>
              <div className="hidden sm:inline ">: &nbsp;</div>
              Pranav. M
            </div>
          </div>
          <div className="flex flex-wrap gap-7 font-medium text-md md:text-lg">
            <div className="hidden sm:inline">Profile</div>
            <div>
              <div className="hidden sm:inline ">: &nbsp;</div>
              Software Developer
            </div>
          </div>
          <div className="flex flex-wrap gap-8 font-medium text-md md:text-lg">
            <div className="hidden sm:inline">Email</div>
            <div>
              <div className="hidden sm:inline ">: &nbsp;</div>
              mpranavprem@gmail.com
            </div>
          </div>
          <div className="flex flex-wrap gap-6 font-medium text-md md:text-lg">
            <div className="hidden sm:inline">Phone</div>
            <div>
              <div className="hidden sm:inline ">: &nbsp;</div>
              +91 9633063113
            </div>
          </div>
          <div className="flex flex-wrap gap-2 text-md md:text-lg font-medium items-center">
            <div className="hidden sm:inline">Resume</div>
            <div className="flex">
              <div className="hidden sm:inline">: &nbsp;</div>
              <a
                className="underline flex items-center gap-1 text-blue-700 dark:text-blue-500 text-sm sm:text-md md:text-lg"
                href={Resume}
                download="Pranav M - Resume"
              >
                Download resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-gray-900 dark:text-white"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 4.75C2 3.784 2.784 3 3.75 3h4.836c.464 0 .909.184 1.237.513l1.414 1.414a.25.25 0 00.177.073h4.836c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0116.25 17H3.75A1.75 1.75 0 012 15.25V4.75zm8.75 4a.75.75 0 00-1.5 0v2.546l-.943-1.048a.75.75 0 10-1.114 1.004l2.25 2.5a.75.75 0 001.114 0l2.25-2.5a.75.75 0 10-1.114-1.004l-.943 1.048V8.75z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-10">
        <p className="font-medium text-md md:text-lg">
          Hey, It's Pranav. I'm a self-taught Software Developer who have
          passion for creating beautiful, efficient, and responsive web
          applications that are both user-friendly and scalable.
          <br />I specialize in working with React, Node.js, Express.js and
          MongoDB. My expertise in these technologies allows me to build web
          applications from scratch and integrate different functionalities into
          them.
        </p>
      </div>
    </div>
  );
};

export default About;
