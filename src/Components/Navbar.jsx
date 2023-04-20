import React, { useState } from "react";
import { Link } from "react-scroll";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export const navbarOptions = [
  { title: "Home", href: "home" },
  { title: "About", href: "about" },
  { title: "Skills", href: "skills" },
  { title: "Projects", href: "projects" },
  { title: "Contact", href: "contact" },
];

const Navbar = ({ toggleTheme, theme }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(false);

  return (
    <>
      <div className="h-16 items-center justify-between w-full flex dark:bg-gray-900 dark:text-gray-50 text-gray-900 bg-gray-100">
        <div
          id="navbar"
          className="hidden w-full md:flex justify-start items-center gap-10 ml-10"
        >
          {navbarOptions.map((option, index) => {
            return (
              <Link
                key={index}
                onClick={handleClick}
                className="nav-item text-base dark:bg-gradient-to-r bg-gradient-to-r from-gray-900 to-gray-900 dark:from-gray-100 dark:to-gray-100 link-underline cursor-pointer link-underline-black"
                to={option.href}
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
              >
                {option.title}
              </Link>
            );
          })}
        </div>
        <div className="md:hidden cursor-pointer h-14 dark:bg-gray-900 bg-gray-100 text-gray-900 dark:text-white flex justify-start items-center ml-5">
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
        <div className="cursor-pointer mr-10">
          {theme !== "dark" ? (
            <MdLightMode onClick={() => toggleTheme()} size={25} />
          ) : (
            <MdDarkMode onClick={() => toggleTheme()} size={25} />
          )}
        </div>
      </div>
      {open && (
        <div className="transition top-16 duration-300 ease-in-out w-full flex md:hidden flex-col py-2 gap-2 bg-gray-300 dark:bg-gray-800 dark:border-gray-100 border rounded-b-lg border-t-0">
          {navbarOptions.map((option) => {
            return (
              <Link
                onClick={handleClick}
                className="text-sm sm:text-md rounded-full cursor-pointer hover:bg-gray-900 dark:hover:bg-gray-100 hover:text-white dark:hover:text-gray-900 p-2 ml-5 font-normal text-gray-900 dark:text-gray-100"
                to={option.href}
                spy={true}
                smooth={true}
                offset={-70}
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
