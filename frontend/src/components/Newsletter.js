import React, { useState } from 'react';
import axios from 'axios';

function Newsletter({ onNotification }) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      onNotification('Please enter an email address', 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      onNotification('Please enter a valid email', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post('/api/newsletter/subscribe', { email });
      
      if (response.data.success) {
        onNotification('Thank you for subscribing!', 'success');
        setEmail('');
      } else {
        onNotification(response.data.message, 'error');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      onNotification('Failed to subscribe. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="newsletter" id="newsletter">
      <div className="newsletter-container">
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter for exclusive offers and design inspiration</p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
          />
          <button 
            type="submit" 
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
