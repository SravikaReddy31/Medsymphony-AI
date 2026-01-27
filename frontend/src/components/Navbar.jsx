import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
        <div className="navbar-logo">MedSymphony</div>
      <div className={`navbar-links ${open ? "active" : ""}`}>
        <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
        <NavLink to="/symptoms" onClick={() => setOpen(false)}>Symptoms</NavLink>
        <NavLink to="/first-aid" onClick={() => setOpen(false)}>First Aid</NavLink>
        <NavLink to="/hospitals" onClick={() => setOpen(false)}>Hospitals</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
