import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Header.css";
import logo from "../images/logo.png"; // uploaded logo

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header initial={{ y: -100 }} animate={{ y: 0 }} className="header">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="Alive Inc Logo" className="logo-img" />
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button className="menu-btn" onClick={toggleMenu}>☰</button>

        {/* Navigation */}
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
