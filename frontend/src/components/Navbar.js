import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <span className="logo-icon">D</span>
          <span className="logo-text">CHRELISA</span>
        </div>
        <div 
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a 
              href="#home" 
              className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
              onClick={() => handleNavClick('home')}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#tiles" 
              className={`nav-link ${activeLink === 'tiles' ? 'active' : ''}`}
              onClick={() => handleNavClick('tiles')}
            >
              Tiles
            </a>
          </li>
          <li>
            <a 
              href="#fittings" 
              className={`nav-link ${activeLink === 'fittings' ? 'active' : ''}`}
              onClick={() => handleNavClick('fittings')}
            >
              Tap Fittings & Shower
            </a>
          </li>
          <li>
            <a 
              href="#ceramics" 
              className={`nav-link ${activeLink === 'ceramics' ? 'active' : ''}`}
              onClick={() => handleNavClick('ceramics')}
            >
              Bathroom Ceramics
            </a>
          </li>
          <li>
            <a 
              href="#handles" 
              className={`nav-link ${activeLink === 'handles' ? 'active' : ''}`}
              onClick={() => handleNavClick('handles')}
            >
              Door Handles
            </a>
          </li>
          <li>
            <a 
              href="#chandeliers" 
              className={`nav-link ${activeLink === 'chandeliers' ? 'active' : ''}`}
              onClick={() => handleNavClick('chandeliers')}
            >
              Chandeliers
            </a>
          </li>
          <li>
            <a 
              href="#furniture" 
              className={`nav-link ${activeLink === 'furniture' ? 'active' : ''}`}
              onClick={() => handleNavClick('furniture')}
            >
              Furniture
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
              onClick={() => handleNavClick('contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
