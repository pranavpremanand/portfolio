import "./App.css";
import About from "./Components/About";
import Banner from "./Components/Banner";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="z-10" style={{ position: "fixed", width: "100%" }}>
        <Navbar />
      </div>
      <Banner />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
