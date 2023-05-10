import { AiOutlineCloudDownload } from "react-icons/ai";
import Profile from "../Imgs/Profile.jpg";
import Resume from "../Files/Pranav.M-Resume.pdf";

const About = () => {
  return (
    <div
      id="about"
      className="m-5 sm:m-10 p-5 sm:p-10 shadow-lg drop-shadow-md rounded-lg flex-wrap dark:shadow-slate-700 dark:bg-gray-900 shadow-slate-300 bg-gray-50"
    >
      <h1 className="uppercase text-xl sm:text-2xl md:text-3xl md:mt-0 font-bold tracking-widest underline text-center mb-2 md-2 md:mb-5">
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
            <button className="button mt-4 rounded-full">
              <a
                href={Resume}
                download="Pranav M - Resume"
                className="w-32 h-9 transition-all duration-300 ease-in-out font-semibold justify-center tracking-widest rounded-full flex border dark:border-gray-50 border-gray-900 border-transparent items-center gap-2 bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900 text-sm uppercase"
              >
               <div>Resume</div>
                <AiOutlineCloudDownload className="animate-bounce translate-x-36 transition-all ease-in-out duration-300" size={25} />
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full mt-10">
        <p className="font-medium text-sm md:text-md md:text-lg tracking-widest">
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
