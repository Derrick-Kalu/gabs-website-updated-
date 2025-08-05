import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const handleAnchorClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={e => handleAnchorClick(e, '#home')}>
          <img src="../assets/gabs.png" alt="GABS Logo" />
        </a>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={e => handleAnchorClick(e, '#home')}>Home</a></li>
          <li><a href="#about" onClick={e => handleAnchorClick(e, '#about')}>About</a></li>
          <li><a href="#services" onClick={e => handleAnchorClick(e, '#services')}>Services</a></li>
          <li><a href="#gallery" onClick={e => handleAnchorClick(e, '#gallery')}>Gallery</a></li>
          <li><a href="#contact" onClick={e => handleAnchorClick(e, '#contact')}>Contact</a></li>
          <li>
            <Link to="/join" className="cta-btn">
            
            </Link>
          </li>
        </ul>

        <div
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
