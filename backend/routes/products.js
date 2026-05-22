const express = require('express');
const router = express.Router();

// Sample products data
const products = [
  {
    id: 1,
    name: 'Modern Ceramic Tiles',
    category: 'Tiles',
    price: 45,
    currency: '$',
    unit: 'm²',
    image: 'modern-ceramic-tiles',
    gradient: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
    description: 'Contemporary ceramic tiles with premium finish'
  },
  {
    id: 2,
    name: 'Premium Chrome Fittings',
    category: 'Tap Fittings & Shower',
    price: 150,
    currency: '$',
    unit: 'per piece',
    image: 'chrome-fittings',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    description: 'High-quality chrome bathroom fixtures'
  },
  {
    id: 3,
    name: 'Luxury Bathroom Suite',
    category: 'Bathroom Ceramics',
    price: 800,
    currency: '$',
    unit: 'suite',
    image: 'bathroom-suite',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    description: 'Complete bathroom ceramic collection'
  },
  {
    id: 4,
    name: 'Designer Door Handles',
    category: 'Door Handles & Locks',
    price: 25,
    currency: '$',
    unit: 'per piece',
    image: 'door-handles',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    description: 'Elegant door hardware for modern interiors'
  },
  {
    id: 5,
    name: 'Crystal Chandeliers',
    category: 'Chandeliers & Lamps',
    price: 500,
    currency: '$',
    unit: 'per piece',
    image: 'chandeliers',
    gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    description: 'Stunning crystal lighting fixtures'
  },
  {
    id: 6,
    name: 'Contemporary Furniture',
    category: 'Luxury Furniture',
    price: 1200,
    currency: '$',
    unit: 'piece',
    image: 'furniture',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    description: 'Modern luxury furniture collection'
  }
];

// Get all products
router.get('/', (req, res) => {
  const { category } = req.query;

  let filteredProducts = products;

  if (category) {
    filteredProducts = products.filter(p => 
      p.category.toLowerCase() === category.toLowerCase()
    );
  }

  res.json({ 
    success: true, 
    data: filteredProducts,
    total: filteredProducts.length
  });
});

// Get single product
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  
  if (!product) {
    return res.status(404).json({ 
      success: false, 
      message: 'Product not found' 
    });
  }

  res.json({ 
    success: true, 
    data: product 
  });
});

// Get featured products
router.get('/featured', (req, res) => {
  const featured = products.slice(0, 6);
  
  res.json({ 
    success: true, 
    data: featured 
  });
});

module.exports = router;
