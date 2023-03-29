import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="hidden w-full md:flex h-20 bg-cyan-900 text-white justify-end items-center gap-10 pr-10">
        <a className="link-underline link-underline-black" href="#home">
          Home
        </a>
        <a className="link-underline link-underline-black" href="#about">
          About
        </a>
        {/* <a className="link-underline link-underline-black" href="#services">
        Services
      </a> */}
        <a className="link-underline link-underline-black" href="#projects">
          Projects
        </a>
        <a className="link-underline link-underline-black" href="#contact">
          Contact
        </a>
      </div>
      <div className="md:hidden cursor-pointer h-14 bg-cyan-900 text-white flex justify-start items-center pl-5">
          <svg
            onClick={() => setOpen((prev) => !prev)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            // className="w-8 h-8 hover:w-10 hover:h-10 hover:-ml-1"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
      {open && (
        <div className="top-20 flex md:hidden flex-col py-2 gap-2 bg-cyan-100">
          <>
            <a
              className="rounded-full hover:bg-cyan-900 hover:text-white p-2 pl-5 font-normal text-cyan-900"
              href="#home"
            >
              Home
            </a>
          </>
          <>
            <a
              className="rounded-full hover:bg-cyan-900 hover:text-white p-2 pl-5 font-normal text-cyan-900"
              href="#about"
            >
              About
            </a>
          </>
          {/* <a className="rounded-full hover:bg-cyan-900 hover:text-white p-2" href="#services">
        Services
      </a> */}
          <>
            <a
              className="rounded-full hover:bg-cyan-900 hover:text-white p-2 pl-5 font-normal text-cyan-900"
              href="#projects"
            >
              Projects
            </a>
          </>
          <>
            <a
              className="rounded-full hover:bg-cyan-900 hover:text-white p-2 pl-5 font-normal text-cyan-900"
              href="#contact"
            >
              Contact
            </a>
          </>
        </div>
      )}
      </div>
    </>
  );
};

export default Navbar;
