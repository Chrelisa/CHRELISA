import React from 'react';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2>About CHRELISA</h2>
          <p>
            CHRELISA is your premier destination for luxury interior design solutions. 
            We curate the finest selection of premium materials, furniture, and home décor 
            elements from around the world.
          </p>
          <p>
            Our commitment is to transform your space into a sanctuary of elegance and sophistication.
          </p>
          <ul className="about-features">
            <li><i className="fas fa-check"></i> Premium Quality Products</li>
            <li><i className="fas fa-check"></i> Expert Design Consultation</li>
            <li><i className="fas fa-check"></i> Worldwide Shipping</li>
            <li><i className="fas fa-check"></i> 24/7 Customer Support</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
