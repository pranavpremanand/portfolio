import React from "react";
import Profile from "../Imgs/Profile.jpg";

const About = () => {
  return (
    <div id="about" className="m-5 sm:m-10 p-5 sm:p-10 shadow-2xl shadow-slate-900 drop-shadow-md rounded-lg bg-cyan-50 flex-wrap">
      <h1 className="text-3xl md:mt-0 md:text-4xl font-bold tracking-widest underline text-center mb-5">
        About Me
      </h1>
      <div className="flex flex-wrap-reverse gap-5 sm:gap-0 justify-around">
        <div className="md:w-5/12 w-full flex flex-col">
          <div className="flex flex-wrap justify-center gap-5">
            <img src={Profile} className="w-full sm:w-2/4" alt="" />
            <div className="flex w-full flex-col gap-2">
              <div className="flex flex-wrap gap-5 font-medium text-lg">
                <div className="hidden sm:block">Name:</div>
                <div>Pranav. M</div>
              </div>
              <div className="flex flex-wrap gap-5 font-medium text-lg">
                <div className="hidden sm:block">Profile:</div>
                <div>MERN Stack Developer</div>
              </div>
              <div className="flex flex-wrap gap-5 font-medium text-lg">
                <div className="hidden sm:block">Email:</div>
                <a href="https://mailto:mpranavprem@gmail.com">
                  mpranavprem@gmail.com
                </a>
              </div>
              <div className="flex flex-wrap gap-5 font-medium text-lg">
                <div className="hidden sm:block">Phone:</div>
                <a href="https://wa.me/+919633063113">+91 9633063113</a>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-widest underline mb-5">
              Skills
            </h1>
            <div className="my-5">
              <div className="flex justify-between mb-1">
                <div className="text-lg font-medium text-cyan-900 dark:text-cyan-900">
                  React.js
                </div>
                <div className="text-lg font-medium text-cyan-900 dark:text-cyan-900">
                  85%
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
                <div
                  className="bg-cyan-800 h-2.5 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
            <div className="my-5">
              <div className="flex justify-between mb-1">
                <div className="text-lg font-medium text-cyan-900 dark:text-cyan-900">
                  Node.js
                </div>
                <div className="text-lg font-medium text-cyan-900 dark:text-cyan-900">
                  80%
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
                <div
                  className="bg-cyan-800 h-2.5 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            <div className="my-5">
              <div className="flex justify-between mb-1">
                <div className="text-lg font-medium text-cyan-900 dark:text-cyan-900">
                  Express.js
                </div>
                <div className="text-lg font-medium text-cyan-900 dark:text-cyan-900">
                  78%
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
                <div
                  className="bg-cyan-800 h-2.5 rounded-full"
                  style={{ width: "78%" }}
                ></div>
              </div>
            </div>
            <div className="my-5">
              <div className="flex justify-between mb-1">
                <div className="text-lg font-medium text-cyan-900 dark:text-cyan-900">
                  MongoDB
                </div>
                <div className="text-lg font-medium text-cyan-900 dark:text-cyan-900">
                  80%
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
                <div
                  className="bg-cyan-800 h-2.5 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-5/12">
          <p className="text-lg">
            Hello there, I'm Pranav. A MERN stack developer who have passion for
            creating beautiful, efficient, and responsive web applications that
            are both user-friendly and scalable.
          </p>
          <p className="text-lg">
            As a MERN stack developer, I specialize in working with MongoDB,
            Express.js, React, and Node.js. My expertise in these technologies
            allows me to build web applications from scratch and integrate
            different functionalities into them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
