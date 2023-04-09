import React from "react";
import "./styles.css";
import Header from "./Componenet/Header";
import Navbar from "./Componenet/Navbar";
import Home from "./Componenet/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Componenet/About";
import Dashboard from "./Componenet/Dashboard";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div style={{ display: "flex" }}>
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
