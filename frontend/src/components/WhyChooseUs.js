import React from 'react';

function WhyChooseUs() {
  const benefits = [
    {
      id: 1,
      icon: 'crown',
      title: 'Premium Quality',
      description: 'Carefully selected products from the world\'s finest manufacturers'
    },
    {
      id: 2,
      icon: 'users',
      title: 'Expert Consultants',
      description: 'Professional design consultation to match your vision'
    },
    {
      id: 3,
      icon: 'shipping-fast',
      title: 'Fast Delivery',
      description: 'Quick and reliable worldwide shipping on all orders'
    },
    {
      id: 4,
      icon: 'certificate',
      title: 'Warranty & Support',
      description: 'Comprehensive warranty and dedicated customer support'
    }
  ];

  return (
    <section className="why-choose-us" id="why-choose-us">
      <div className="section-header">
        <h2>Why Choose CHRELISA</h2>
        <p>What sets us apart from the rest</p>
      </div>

      <div className="benefits-grid">
        {benefits.map((benefit) => (
          <div key={benefit.id} className="benefit-item">
            <div className="benefit-icon">
              <i className={`fas fa-${benefit.icon}`}></i>
            </div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
