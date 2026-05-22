import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>CHRELISA</h3>
          <p>Premium interior design solutions for the modern luxury home.</p>
          <div className="social-links">
            <a href="#" title="Facebook"><i className="fab fa-facebook"></i></a>
            <a href="#" title="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" title="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#categories">Collections</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Collections</h4>
          <ul>
            <li><a href="#">Tiles</a></li>
            <li><a href="#">Bathroom Fixtures</a></li>
            <li><a href="#">Furniture</a></li>
            <li><a href="#">Lighting</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Shipping Info</a></li>
            <li><a href="#">Returns</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 CHRELISA. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
