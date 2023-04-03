import React, { useState } from "react";
import { Link } from "react-scroll";

export const navbarOptions = [
  { title: "Home", href: "home" },
  { title: "About", href: "about" },
  { title: "Projects", href: "projects" },
  { title: "Contact", href: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(false);

  return (
    <>
      <div id="navbar" className="hidden w-full md:flex h-16 bg-cyan-900 text-white justify-end items-center gap-10 pr-10">
        {navbarOptions.map((option) => {
          return (
            <Link
              onClick={handleClick}
              className="link-underline cursor-pointer link-underline-black"
              to={option.href}
              spy={true}
              smooth={true}
              offset={50}
              duration={800}
            >
              {option.title}
            </Link>
          );
        })}
      </div>
      <div className="md:hidden cursor-pointer h-14 bg-cyan-900 text-white flex justify-start items-center pl-5">
        <svg
          onClick={() => setOpen((prev) => !prev)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      {open && (
        <div className="top-16 w-full flex md:hidden flex-col py-2 gap-2 bg-cyan-100">
          {navbarOptions.map((option) => {
            return (
              <Link
                onClick={handleClick}
                className="rounded-full cursor-pointer hover:bg-cyan-900 hover:text-white p-2 pl-5 font-normal text-cyan-900"
                to={option.href}
                spy={true}
                smooth={true}
                offset={50}
                duration={1000}
              >
                {option.title}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Navbar;
