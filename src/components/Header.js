import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Header.css";
import logo from "../images/logo.png"; // Apna logo path yaha sahi kar dena

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Scroll lock when menu is open
    document.body.style.overflow = menuOpen ? "auto" : "hidden";
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="header"
    >
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="Alive Inc Logo" className="logo-img" />
          </Link>
        </div>

        {/* Hamburger / Close Button */}
        <button
          className="menu-btn"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Navigation Menu */}
        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/services" onClick={closeMenu}>Services</Link>
          <Link to="/portfolio" onClick={closeMenu}>Portfolio</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;