import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AnimatedCursor from "./components/AnimatedCursor.js";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App" id={load ? "no-scroll" : "scroll"}>
      <Preloader load={load} />
      <Navbar />
      <AnimatedCursor/>
      <Home />
      <About />
      <Projects />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
