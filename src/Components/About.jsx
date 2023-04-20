import { AiOutlineCloudDownload } from "react-icons/ai";
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
            <button className="mt-4 rounded-full p-[0.9px] hover:border-slate-900 border-transparent border">
              <a
                href={Resume}
                download="Pranav M - Resume"
                className="tracking-widest rounded-full flex border dark:border-white border-slate-900 hover:dark:bg-slate-900 hover:dark:text-white border-transparent hover:border-slate-900 hover:bg-white hover:text-slate-900 items-center gap-2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 py-1 px-4 text-sm font-semibold uppercase"
              >
                Resume
                <AiOutlineCloudDownload className="animate-bounce" size={25} />
              </a>
            </button>
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
