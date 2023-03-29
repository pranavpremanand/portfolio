import "./App.css";
import About from "./Components/About";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="z-10" style={{ position: "fixed", width: "100%" }}>
        <Navbar />
      </div>
      <Banner />
      <About />
      <Footer />
    </div>
  );
}

export default App;
