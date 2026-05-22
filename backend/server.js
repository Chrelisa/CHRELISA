require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

// Import routes
const contactRoutes = require('./routes/contact');
const newsletterRoutes = require('./routes/newsletter');
const categoriesRoutes = require('./routes/categories');
const productsRoutes = require('./routes/products');

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/products', productsRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    success: false, 
    message: 'Route not found' 
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📧 SMTP Host: ${process.env.SMTP_HOST}`);
});

module.exports = app;
