import React from 'react';

function Hero() {
  const scrollToCategories = () => {
    const element = document.getElementById('categories');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to CHRELISA</h1>
        <p className="hero-subtitle">Luxury Interior Design & Premium Home Solutions</p>
        <button className="cta-button" onClick={scrollToCategories}>
          Explore Collections
        </button>
      </div>
      <div className="scroll-indicator">
        <span>SCROLL DOWN</span>
        <div className="mouse-wheel"></div>
      </div>
    </section>
  );
}

export default Hero;
