import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landingpage from "./Component/LandingPage/Landingpage";
import Login from "./Component/Login";
import Register from "./Component/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
