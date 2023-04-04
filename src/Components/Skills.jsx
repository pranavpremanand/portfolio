import React from "react";
import html from "../Imgs/html.png";
import css from "../Imgs/css.png";
import github from "../Imgs/github.png";
import reactimage from "../Imgs/react.png";
import node from "../Imgs/node.png";
import javascript from "../Imgs/javascript.png";
import tailwind from "../Imgs/tailwind.png";
import mongodb from "../Imgs/mongodb.png";
import bootstrap from "../Imgs/bootstrap.png";
import express from "../Imgs/expressjs.png";
import mui from "../Imgs/MUI.png";
import redux from "../Imgs/redux.png";
import postgresql from "../Imgs/postgresql.png";
import jwt from "../Imgs/jwt.png";
import npm from "../Imgs/npm.png";
import githubDark from "../Imgs/github-dark.png";

const Skills = ({ theme }) => {
  const skills = [
    {
      id: 1,
      src: reactimage,
      title: "React.js",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: javascript,
      title: "JavaScript ES6",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: redux,
      title: "Redux Toolkit",
      style: "shadow-purple-600",
    },
    {
      id: 4,
      src: node,
      title: "Node.js",
      style: "shadow-green-400",
    },
    {
      id: 5,
      src: express,
      title: "Express.js",
      style: "shadow-gray-500",
    },
    {
      id: 6,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-400",
    },

    {
      id: 7,
      src: html,
      title: "HTML5",
      style: "shadow-orange-500",
    },
    {
      id: 8,
      src: css,
      title: "CSS3",
      style: "shadow-blue-500",
    },
    {
      id: 9,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-cyan-700",
    },
    {
      id: 10,
      src: mui,
      title: "Material UI",
      style: "shadow-blue-500",
    },
    {
      id: 11,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-400",
    },
    {
      id: 12,
      src: npm,
      title: "NPM",
      style: "shadow-red-600",
    },
    {
      id: 13,
      src: postgresql,
      title: "PostgreSQL",
      style: "shadow-blue-400",
    },
    {
      id: 14,
      src: jwt,
      title: "JSON Web Token",
      style: "shadow-blue-400",
    },
    {
      id: 15,
      src: theme === "dark" ? github : githubDark,
      title: "GitHub",
      style: "shadow-gray-500",
    },
  ];
  return (
    <>
      <div
        id="skills"
        className="m-5 sm:m-10 p-5 sm:p-10 shadow-2xl shadow-slate-900 drop-shadow-md rounded-lg bg-gray-50 dark:bg-gray-900 dark:shadow-slate-400 flex-wrap"
      >
        <h1 className="text-2xl md:text-3xl text-center font-bold uppercase tracking-widest underline md-2 md:mb-5">
          Specialized Skills
        </h1>
        <div className="w-full grid grid-cols-3 lg:grid-cols-5 gap-8 text-center py-8 sm:px-0">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-16 sm:w-20 mx-auto" />
              <p className="mt-2 hidden sm:inline text-sm overflow-hidden sm:text-base cursor-default font-medium">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;