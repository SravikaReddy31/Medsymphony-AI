import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

import Home from "./pages/Home";
import SymptomChecker from "./pages/SymptomChecker";
import FirstAid from "./pages/firstaid";
import Hospitals from "./pages/Hospitals";

export default function App() {
  return (
    <>
      <Navbar />

      {/* MAIN CONTENT */}
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/symptoms" element={<SymptomChecker />} />
          <Route path="/first-aid" element={<FirstAid />} />
          <Route path="/hospital" element={<Hospitals />} />
        </Routes>
      </div>
      
      {/* FOOTER ALWAYS AT BOTTOM */}
      <Footer />
    </>
  );
}
