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
      className="m-5 sm:m-10 p-5 sm:p-10 shadow-2xl shadow-slate-900 drop-shadow-md rounded-lg bg-cyan-50 flex-wrap"
    >
      <h1 className="text-2xl md:text-3xl md:mt-0 font-bold tracking-widest underline text-center mb-5">
        About Me
      </h1>
      <div className="flex flex-wrap-reverse gap-5 sm:gap-0 justify-around">
        <div className="md:w-5/12 w-full flex flex-col">
          <div className="flex flex-wrap justify-center gap-5">
            <img
              src={Profile}
              className="w-full mt-3 rounded-lg md:mt-0 sm:w-2/4"
              alt=""
            />
            <div className="flex w-full flex-col gap-2">
              <div className="flex flex-wrap gap-9 font-medium text-md md:text-lg">
                <div className="hidden lg:inline">Name</div>
                <div>
                  <div className="hidden lg:inline ">: &nbsp;</div>Pranav. M
                </div>
              </div>
              <div className="flex flex-wrap gap-9 font-medium text-md md:text-lg">
                <div className="hidden lg:inline">Profile</div>
                <div>
                  <div className="hidden lg:inline ">: &nbsp;</div>Software
                  Developer
                </div>
              </div>
              <div className="flex flex-wrap gap-10 font-medium text-md md:text-lg">
                <div className="hidden lg:inline">Email</div>
                <div>
                  <div className="hidden lg:inline ">: &nbsp;</div>
                  mpranavprem@gmail.com
                </div>
              </div>
              <div className="flex flex-wrap gap-8 font-medium text-md md:text-lg">
                <div className="hidden lg:inline">Phone</div>
                <div>
                  <div className="hidden lg:inline ">: &nbsp;</div>+91
                  9633063113
                </div>
              </div>
              <div className="flex flex-wrap gap-4 text-md md:text-lg font-medium items-center">
                <div className="hidden lg:inline">Resume</div>
                <div>
                  <div className="hidden lg:inline ">: &nbsp;</div>
                  <a
                    className="underline text-blue-500 text-sm md:text-md"
                    href={Resume}
                    download="Pranav M - Resume"
                  >
                    Download resume
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-widest underline mb-5">
              Specialized Skills
            </h1>
            {skills.map((skill) => {
              return (
                <div className="my-5">
                  <div className="flex justify-between mb-1">
                    <div className="text-md md:text-lg font-medium text-cyan-900 dark:text-cyan-900">
                      {skill.name}
                    </div>
                    <div className="text-md md:text-lg font-medium text-cyan-900 dark:text-cyan-900">
                      {skill.percentage}
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
                    <div
                      className="bg-cyan-800 hover:bg-cyan-600 h-2.5 rounded-full"
                      style={{ width: skill.percentage }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="md:w-5/12">
          <p className="text-md md:text-lg">
            Hey, It's Pranav. I'm a self-taught Software developer who have
            passion for creating beautiful, efficient, and responsive web
            applications that are both user-friendly and scalable.
          </p>
          <p className="text-md md:text-lg">
            I specialize in working with MongoDB, Express.js, React, and
            Node.js. My expertise in these technologies allows me to build web
            applications from scratch and integrate different functionalities
            into them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
