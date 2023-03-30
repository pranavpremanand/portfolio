import "./App.css";
import About from "./Components/About";
import Banner from "./Components/Banner";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import { SpinnerContext } from "./Contexts/SpinnerContext";
import { motion } from "framer-motion";

export const Spinner = () => {
  return (
    <div aria-label="Loading..." className="spinner-parent" role="status">
      <svg
        className="spinner-border h-12 w-12 animate-spin stroke-gray-500"
        viewBox="0 0 256 256"
      >
        <line
          x1="128"
          y1="32"
          x2="128"
          y2="64"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        ></line>
        <line
          x1="195.9"
          y1="60.1"
          x2="173.3"
          y2="82.7"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        ></line>
        <line
          x1="224"
          y1="128"
          x2="192"
          y2="128"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        ></line>
        <line
          x1="195.9"
          y1="195.9"
          x2="173.3"
          y2="173.3"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        ></line>
        <line
          x1="128"
          y1="224"
          x2="128"
          y2="192"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        ></line>
        <line
          x1="60.1"
          y1="195.9"
          x2="82.7"
          y2="173.3"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        ></line>
        <line
          x1="32"
          y1="128"
          x2="64"
          y2="128"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        ></line>
        <line
          x1="60.1"
          y1="60.1"
          x2="82.7"
          y2="82.7"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        ></line>
      </svg>
    </div>
  );
};

function App() {
  const [spinner, setSpinner] = useState(false);
  const spinnerStatus = () => {
    setSpinner((prev) => !prev);
  };
  return (
    <div className="App">
      <SpinnerContext.Provider
        value={{ spinner: spinnerStatus, setSpinner: spinnerStatus }}
      >
        <Toaster position="top-center" reverseOrder={false} />
        {spinner && <Spinner />}
        <motion.div
          initial={{ opacity: 0, transition: { duration: 1 } }}
          animate={{ opacity: 1 }}
          className="parts"
        >
          <div
            className="z-10"
            style={{ position: "fixed", width: "100%", zIndex: "1000" }}
          >
            <Navbar />
          </div>
          <Banner />
          <About />
          <Contact />
          <Footer />
        </motion.div>
      </SpinnerContext.Provider>
    </div>
  );
}

export default App;
