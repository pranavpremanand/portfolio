import React from "react";
import Profile from "../Imgs/Profile.jpg";
import Resume from "../Files/Pranav.M-Resume.pdf";

export const skills = [
  { name: "JavaScript", percentage: "85%" },
  { name: "React.js", percentage: "85%" },
  { name: "Node.js", percentage: "83%" },
  { name: "Express.js", percentage: "78%" },
  { name: "MongoDB", percentage: "80%" },
];

const About = () => {
  return (
    <div
      id="about"
      className="m-5 sm:m-10 p-5 sm:p-10 shadow-2xl shadow-slate-900 drop-shadow-md rounded-lg bg-sky-50 flex-wrap"
    >
      <h1 className="text-xl sm:text-2xl capitalize md:text-3xl md:mt-0 font-bold tracking-widest underline text-center mb-2 sm:mb-5">
        about me
      </h1>
      <div className="flex flex-wrap-reverse gap-5 sm:gap-0 justify-around">
        <div className="md:w-10/12 xl:w-4/12 w-full flex flex-col">
          <div className="flex flex-wrap justify-center gap-5">
            <div className="flex w-full flex-col gap-2">
              <img
                src={Profile}
                className="self-center lg:self-start object-fill w-full sm:w-2/4 md:w-3/4 max-w-xs mt-2 sm:mt-4 rounded-md lg:mt-0"
                alt=""
              />
              <div className="flex flex-col gap-2 mt-3">
                <div className="flex flex-wrap gap-7 font-medium text-md md:text-lg">
                  <div className="hidden lg:inline">Name</div>
                  <div>
                    <div className="hidden lg:inline ">: &nbsp;</div>
                    Pranav. M
                  </div>
                </div>
                <div className="flex flex-wrap gap-7 font-medium text-md md:text-lg">
                  <div className="hidden lg:inline">Profile</div>
                  <div>
                    <div className="hidden lg:inline ">: &nbsp;</div>
                    Software Developer
                  </div>
                </div>
                <div className="flex flex-wrap gap-8 font-medium text-md md:text-lg">
                  <div className="hidden lg:inline">Email</div>
                  <div>
                    <div className="hidden lg:inline ">: &nbsp;</div>
                    mpranavprem@gmail.com
                  </div>
                </div>
                <div className="flex flex-wrap gap-6 font-medium text-md md:text-lg">
                  <div className="hidden lg:inline">Phone</div>
                  <div>
                    <div className="hidden lg:inline ">: &nbsp;</div>
                    +91 9633063113
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 text-md md:text-lg font-medium items-center">
                  <div className="hidden lg:inline">Resume</div>
                  <div className="flex">
                    <div className="hidden lg:inline">: &nbsp;</div>
                    <a
                      className="underline flex items-center gap-1 text-sky-700 text-sm sm:text-md md:text-lg"
                      href={Resume}
                      download="Pranav M - Resume"
                    >
                      Download resume
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 text-sky-900"
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
          </div>
          <div className="mt-10">
            <h1 className="text-xl sm:text-2xl md:text-3xl text-center md:text-start font-bold uppercase tracking-widest underline mb-5">
              Specialized Skills
            </h1>
            {skills.map((skill) => {
              return (
                <div className="my-5">
                  <div className="flex justify-between mb-1">
                    <div className="text-sm sm:text-md md:text-lg font-medium text-sky-900 dark:text-sky-900">
                      {skill.name}
                    </div>
                    <div className="text-sm sm:text-md md:text-lg font-medium text-sky-900 dark:text-sky-900">
                      {skill.percentage}
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2.5 dark:bg-gray-400">
                    <div
                      className="bg-sky-800 h-1.5 sm:h-2.5 rounded-full"
                      style={{ width: skill.percentage }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="md:w-10/12 xl:w-6/12 2xl:w-7/12">
          <p className="text-sm sm:text-md md:text-lg">
            Hey, It's Pranav. I'm a self-taught Software Developer who have
            passion for creating beautiful, efficient, and responsive web
            applications that are both user-friendly and scalable.
            <br />I specialize in working with React, Node.js, Express.js and
            MongoDB. My expertise in these technologies allows me to build web
            applications from scratch and integrate different functionalities
            into them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
