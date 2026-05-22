const express = require('express');
const router = express.Router();

// Static categories data (no database needed)
const categories = [
  {
    id: 1,
    name: 'Tiles',
    icon: 'border-all',
    description: 'Exquisite ceramic and porcelain tiles for every surface',
    link: '/collections/tiles'
  },
  {
    id: 2,
    name: 'Tap Fittings & Shower',
    icon: 'shower',
    description: 'Premium bathroom fixtures with modern design',
    link: '/collections/fittings'
  },
  {
    id: 3,
    name: 'Bathroom Ceramics',
    icon: 'bath',
    description: 'Elegant ceramic sanitary ware for luxurious bathrooms',
    link: '/collections/ceramics'
  },
  {
    id: 4,
    name: 'Door Handles & Locks',
    icon: 'door-open',
    description: 'Sophisticated hardware for doors and furniture',
    link: '/collections/handles'
  },
  {
    id: 5,
    name: 'Chandeliers & Lamps',
    icon: 'lightbulb',
    description: 'Stunning lighting fixtures to illuminate your space',
    link: '/collections/lighting'
  },
  {
    id: 6,
    name: 'Luxury Furniture',
    icon: 'chair',
    description: 'Premium furniture pieces for every room',
    link: '/collections/furniture'
  },
  {
    id: 7,
    name: 'Outdoor Furniture',
    icon: 'tree',
    description: 'Weather-resistant luxury outdoor collections',
    link: '/collections/outdoor'
  },
  {
    id: 8,
    name: 'Luxury Fabrics',
    icon: 'cloth',
    description: 'Premium textiles for upholstery and décor',
    link: '/collections/fabrics'
  }
];

// GET /api/categories - Get all categories
router.get('/', (req, res) => {
  res.json({
    success: true,
    data: categories,
    total: categories.length
  });
});

// GET /api/categories/:id - Get single category
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const category = categories.find(c =>
    c.id === parseInt(id) || c.name.toLowerCase() === id.toLowerCase()
  );

  if (!category) {
    return res.status(404).json({
      success: false,
      message: 'Category not found'
    });
  }

  res.json({
    success: true,
    data: category
  });
});

module.exports = router;
