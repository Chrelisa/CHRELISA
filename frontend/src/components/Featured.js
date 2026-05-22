import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Featured() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      if (response.data.success) {
        setProducts(response.data.data.slice(0, 6));
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      // Fallback data
      setProducts([
        {
          id: 1,
          name: 'Modern Ceramic Tiles',
          price: 45,
          currency: '$',
          unit: 'm²',
          gradient: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)'
        },
        {
          id: 2,
          name: 'Premium Chrome Fittings',
          price: 150,
          currency: '$',
          unit: 'per piece',
          gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        },
        {
          id: 3,
          name: 'Luxury Bathroom Suite',
          price: 800,
          currency: '$',
          unit: 'suite',
          gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
        },
        {
          id: 4,
          name: 'Designer Door Handles',
          price: 25,
          currency: '$',
          unit: 'per piece',
          gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
        },
        {
          id: 5,
          name: 'Crystal Chandeliers',
          price: 500,
          currency: '$',
          unit: 'per piece',
          gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
        },
        {
          id: 6,
          name: 'Contemporary Furniture',
          price: 1200,
          currency: '$',
          unit: 'piece',
          gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetails = (productName) => {
    alert(`Viewing details for: ${productName}`);
  };

  return (
    <section className="featured" id="featured">
      <div className="section-header">
        <h2>Featured Selections</h2>
        <p>Handpicked items from our finest collections</p>
      </div>

      <div className="featured-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div 
              className="product-image" 
              style={{ background: product.gradient }}
            ></div>
            <h3>{product.name}</h3>
            <p className="price">
              From {product.currency}{product.price}/{product.unit}
            </p>
            <button 
              className="add-to-cart"
              onClick={() => handleViewDetails(product.name)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Featured;
