import React from "react";
import Banner from "../Imgs/Banner.jpg";
import Img1 from "../Imgs/applyjobssite.png";
import Img2 from "../Imgs/footballersapp.png";
import Img4 from "../Imgs/dashboard.png";
import Img3 from "../Imgs/travels.png";

export const projects = [
  {
    title: "Job Applying Website",
    img: Img1,
    link: "https://applyjobs.netlify.app",
    description: "A website where you can apply for different job positions.",
  },
  {
    title: "Footballers App",
    img: Img2,
    link: "https://footballersapp.netlify.app",
    description:
      "You can search any football player's information here and create your Best 11 team.",
  },
  {
    title: "Travels Web site",
    img: Img3,
    link: "https://travelandtourismagency.netlify.app",
    description:
      "It's a website clone of Go Lakshadweep. All 3 pages designed are complete responsive.",
  },
  {
    title: "Admin Dashboard",
    img: Img4,
    link: "https://admindashboard-web.netlify.app/",
    description:
      "This admin dashboard contains 3 pages. Admin can create Employees and Departments and they will be displayed on the table.",
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="m-5 sm:m-10 p-5 sm:p-10 shadow-2xl shadow-slate-900 drop-shadow-md rounded-lg bg-gray-200 flex-wrap"
    >
      <h1 className="text-2xl uppercase md:text-3xl md:mt-0 font-bold tracking-widest underline text-center mb-5">
        Projects
      </h1>
      <div className="flex justify-center gap-5 px-1 lg:px-10 flex-wrap">
        {projects.map((project) => {
          return (
            <div className="w-full md:w-5/12 lg:w-4/12 2xl:w-2/12 mb-2">
              <div className="max-h-40 w-full overflow-hidden rounded-t-md">
                <img
                  className="object-fill w-full ease-in-out hover:scale-125 transition duration-700 cursor-pointer"
                  src={project.img}
                  alt=""
                />
                <hr />
              </div>
              <div className="overflow-hidden w-full h-40 px-3 pt-3 flex flex-col bg-white rounded-b-md">
                <div className="w-full flex justify-between items-center">
                  <h3 className="text-md md:text-lg mb-1 font-medium">
                    {project.title}
                  </h3>
                  <div className="">
                    <a href={project.link}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 cursor-pointer "
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <hr />
                <div className="flex">
                  <p className="text-sm mt-2 overflow-ellipsis overflow-hidden">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
