require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

// Import routes
const contactRoutes = require('./routes/contact');
const newsletterRoutes = require('./routes/newsletter');
const categoriesRoutes = require('./routes/categories');
const productsRoutes = require('./routes/products');

const app = express();

// Ensure the data directory exists for file-based persistence
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
  console.log('📁 Created data directory for local JSON storage.');
}

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'Server is running',
    database: 'none (file-based storage)',
    dataDirectory: dataDir
  });
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

const DEFAULT_PORT = 5002;
const PORT = Number(process.env.PORT) || DEFAULT_PORT;

const startServer = (port) => {
  const server = app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
    console.log(`📧 SMTP Host: ${process.env.SMTP_HOST || 'Not Configured'}`);
    console.log(`💾 Using local file-based storage (no database required)`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE' && port === DEFAULT_PORT) {
      const fallbackPort = DEFAULT_PORT + 1;
      console.warn(`⚠️ Port ${DEFAULT_PORT} is in use. Trying http://localhost:${fallbackPort} instead.`);
      startServer(fallbackPort);
      return;
    }

    console.error('Server failed to start:', err);
    process.exit(1);
  });
};

startServer(PORT);

module.exports = app;
