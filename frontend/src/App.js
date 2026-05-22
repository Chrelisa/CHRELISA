import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Categories from './components/Categories';
import Featured from './components/Featured';
import WhyChooseUs from './components/WhyChooseUs';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Notification from './components/Notification';

function App() {
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Categories />
      <Featured />
      <WhyChooseUs />
      <Newsletter onNotification={showNotification} />
      <Contact onNotification={showNotification} />
      <Footer />
      {notification && (
        <Notification 
          message={notification.message} 
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
}

export default App;
