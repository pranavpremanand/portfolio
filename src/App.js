import "./App.css";
import About from "./Components/About";
import Banner from "./Components/Banner";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { SpinnerContext } from "./Contexts/Context";
import { motion } from "framer-motion";
import { Spinner } from "./Components/Spinner";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import SocialLinks from "./Components/SocialLinks";

function App() {
  const [theme, setTheme] = useState(null);
  const [spinner, setSpinner] = useState(false);

  const spinnerStatus = () => {
    setSpinner((prev) => !prev);
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  //Change theme
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <SpinnerContext.Provider
      value={{ spinner: spinnerStatus, setSpinner: spinnerStatus }}
    >
      <div className="dark:bg-gray-900 dark:text-gray-50 text-gray-900 bg-gray-100">
        <Toaster position="top-center" reverseOrder={false} />
        {spinner && <Spinner />}
        <motion.div
          initial={{ opacity: 0, transition: { duration: 2 } }}
          animate={{ opacity: 1 }}
          className="parts"
        >
          <div style={{ position: "fixed", width: "100%", zIndex: "1000" }}>
            <Navbar toggleTheme={toggleTheme} theme={theme} />
          </div>
          <Banner />
          <div className="lg:px-6">
            <About />
            <Skills theme={theme} />
            <Projects />
            <Contact theme={theme} />
          </div>
          <Footer />
          <SocialLinks />
        </motion.div>
      </div>
    </SpinnerContext.Provider>
  );
}

export default App;
