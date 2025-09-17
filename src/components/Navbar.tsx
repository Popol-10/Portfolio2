import React, { useState } from "react";
import "../styles/Navbar.scss";
import { useTheme } from "../ThemeContext";

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">ⓇⒶⒽⓅ.Dev</div>

      {/* Liens */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="#about" onClick={() => setIsOpen(false)}>À propos</a></li>
        <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
        <li><a href="#skills" onClick={() => setIsOpen(false)}>Compétences</a></li>
        <li><a href="#projects" onClick={() => setIsOpen(false)}>Projets</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>

      {/* Actions (toggle + menu hamburger) */}
      <div className="actions">
        <button 
          onClick={toggleTheme} 
          className="theme-toggle"
          aria-label="Changer de thème"
        >
          {theme === "light" ? "🌙" : "🌞"}
        </button>

        {/* Hamburger */}
        <button 
          className={`hamburger ${isOpen ? "active" : ""}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu mobile"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
