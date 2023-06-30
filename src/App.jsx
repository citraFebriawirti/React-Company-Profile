import { useState } from "react";
import "./App.css";
import About from "./Component/About";

import Footer from "./Component/Footer";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";

import Contact from "./Component/Contact";
import Blog from "./Component/Blog";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
