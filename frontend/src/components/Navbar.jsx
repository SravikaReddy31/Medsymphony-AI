import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MedSymphony</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/symptoms">Symptoms</Link>
        <Link to="/first-aid">First Aid</Link>
        <Link to="/hospital">Hospitals</Link>
      </div>
    </nav>
  );
}
