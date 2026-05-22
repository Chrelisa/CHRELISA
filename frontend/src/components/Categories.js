import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/api/categories');
      if (response.data.success) {
        setCategories(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
      // Fallback data
      setCategories([
        {
          id: 1,
          name: 'Tiles',
          icon: 'border-all',
          description: 'Exquisite ceramic and porcelain tiles'
        },
        {
          id: 2,
          name: 'Tap Fittings & Shower',
          icon: 'shower',
          description: 'Premium bathroom fixtures'
        },
        {
          id: 3,
          name: 'Bathroom Ceramics',
          icon: 'bath',
          description: 'Elegant ceramic sanitary ware'
        },
        {
          id: 4,
          name: 'Door Handles & Locks',
          icon: 'door-open',
          description: 'Sophisticated hardware'
        },
        {
          id: 5,
          name: 'Chandeliers & Lamps',
          icon: 'lightbulb',
          description: 'Stunning lighting fixtures'
        },
        {
          id: 6,
          name: 'Luxury Furniture',
          icon: 'chair',
          description: 'Premium furniture pieces'
        },
        {
          id: 7,
          name: 'Outdoor Furniture',
          icon: 'tree',
          description: 'Weather-resistant collections'
        },
        {
          id: 8,
          name: 'Luxury Fabrics',
          icon: 'cloth',
          description: 'Premium textiles'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const getIconClass = (iconName) => {
    const iconMap = {
      'border-all': 'fas fa-border-all',
      'shower': 'fas fa-shower',
      'bath': 'fas fa-bath',
      'door-open': 'fas fa-door-open',
      'lightbulb': 'fas fa-lightbulb',
      'chair': 'fas fa-chair',
      'tree': 'fas fa-tree',
      'cloth': 'fas fa-cloth'
    };
    return iconMap[iconName] || 'fas fa-box';
  };

  return (
    <section className="categories" id="categories">
      <div className="section-header">
        <h2>Our Collections</h2>
        <p>Explore our curated selection of premium products</p>
      </div>

      <div className="categories-grid">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <div className="category-icon">
              <i className={getIconClass(category.icon)}></i>
            </div>
            <h3>{category.name}</h3>
            <p>{category.description}</p>
            <a href="#" className="category-link">
              Explore <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
