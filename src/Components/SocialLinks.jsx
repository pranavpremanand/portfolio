import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import Resume from '../Files/Pranav.M-Resume.pdf'

const SocialLinks = () => {
  const sociallinks = [
    {
      id: 0,
      child: (
        <>
          WhatsApp <BsWhatsapp size={30} />
        </>
      ),
      href: "https://wa.me/+919633063113",
      style: "rounded-tr-md",
    },
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/pranavpremanand/",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/pranavpremanand",
    },
    {
      id: 3,
      child: (
        <>
          Email <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:mpranavprem@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: Resume,
      style: "rounded-br-md",
      download: "Pranav M - Resume",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {sociallinks.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 dark:bg-gray-900 bg-gray-100 ${style}`}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full dark:text-white text-gray-900"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
