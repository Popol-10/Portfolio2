import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a 
          href="https://github.com/Popol-10" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a 
          href="https://www.linkedin.com/in/patrick-razafindrainibe-3207a7204?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Patrick Razafindrainibe. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
