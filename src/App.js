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
import { Spinner } from "./Components/Spinner";
import Projects from "./Components/Projects";

function App() {
  const [spinner, setSpinner] = useState(false);
  const spinnerStatus = () => {
    setSpinner((prev) => !prev);
  };
  return (
    <div className="App bg-sky-100">
      <SpinnerContext.Provider
        value={{ spinner: spinnerStatus, setSpinner: spinnerStatus }}
      >
        <Toaster position="top-center" reverseOrder={false} />
        {spinner && <Spinner />}
        <motion.div
          initial={{ opacity: 0, transition: { duration: 2 } }}
          animate={{ opacity: 1 }}
          className="parts"
        >
          <div style={{ position: "fixed", width: "100%", zIndex: "1000" }}>
            <Navbar />
          </div>
          <Banner />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </motion.div>
      </SpinnerContext.Provider>
    </div>
  );
}

export default App;
