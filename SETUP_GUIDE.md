# CHRELISA Full-Stack Setup & Development Guide

## 📋 Table of Contents
1. [System Requirements](#system-requirements)
2. [Initial Setup](#initial-setup)
3. [Backend Setup](#backend-setup)
4. [Frontend Setup](#frontend-setup)
5. [Running Both Together](#running-both-together)
6. [Common Issues & Solutions](#common-issues--solutions)
7. [Development Workflow](#development-workflow)

---

## System Requirements

### Required Software
- **Node.js**: v14.0.0 or higher
- **npm**: v6.0.0 or higher (comes with Node.js)
- **Git**: v2.0.0 or higher
- **Code Editor**: VS Code (recommended)

> ✅ **No database required.** This project uses local JSON files for form submission persistence.

### Verify Installation
```bash
node --version
npm --version
git --version
```

---

## Initial Setup

### 1. Navigate to Project Directory
```bash
cd /path/to/CHRELISA
```

### 2. Verify Project Structure
```bash
tree -L 2 -I 'node_modules'
```

Expected structure:
```
CHRELISA/
├── backend/
│   ├── routes/
│   ├── data/          ← auto-created by server on first run
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── App.css
│   └── package.json
├── README.md
└── SETUP_GUIDE.md
```

---

## Backend Setup

### Step 1: Navigate to Backend Directory
```bash
cd backend
```

### Step 2: Install Dependencies
```bash
npm install
```

This installs:
- `express` — Web framework
- `cors` — Cross-Origin Resource Sharing
- `nodemailer` — Email service (optional)
- `dotenv` — Environment variables
- `express-validator` — Form validation
- `nodemon` — Auto-reload on changes (dev only)

> ℹ️ **No MongoDB or mongoose** is required. Data is stored in `backend/data/*.json` files, which are auto-created by the server on first run.

### Step 3: Configure Environment Variables (Optional)
```bash
cp .env.example .env
```

Edit `.env` with your email credentials (optional — forms still work without it):
```env
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:3000

# Only needed for email notifications
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-gmail-app-password
FROM_EMAIL=noreply@chrelisa.com
ADMIN_EMAIL=admin@chrelisa.com
```

### Step 4: Start Backend Server
```bash
# Development mode (with auto-reload)
npm run dev

# Or production mode
npm start
```

Expected output:
```
🚀 Server running on http://localhost:5000
📧 SMTP Host: Not Configured
💾 Using local file-based storage (no database required)
```

### Step 5: Test API Endpoints

```bash
# Health check
curl http://localhost:5000/api/health

# Get categories
curl http://localhost:5000/api/categories

# Get products
curl http://localhost:5000/api/products

# Test contact form submission
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","subject":"Test","message":"Test message"}'

# Test newsletter subscription
curl -X POST http://localhost:5000/api/newsletter/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

After form submissions, check the created files:
- `backend/data/contacts.json` — contact form submissions
- `backend/data/newsletter.json` — newsletter subscribers

---

## Frontend Setup (React)

### Step 1: Navigate to Frontend Directory (in a new terminal)
```bash
cd frontend
```

### Step 2: Install Dependencies
```bash
npm install
```

This installs:
- `react` — UI library
- `react-dom` — React DOM renderer
- `react-scripts` — Build tools
- `axios` — HTTP client
- `@fortawesome/fontawesome-free` — Icons

### Step 3: Start Development Server
```bash
npm start
```

Expected output:
```
Compiled successfully!

You can now view chrelisa-frontend in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.x.x:3000
```

The app will automatically open in your default browser.

### Step 4: Verify Frontend Components
- ✅ Navigation bar displays correctly
- ✅ Hero section with CTA button
- ✅ Product categories load from API
- ✅ Featured products section
- ✅ Newsletter form works
- ✅ Contact form works
- ✅ Footer displays

---

## Running Both Together

### Terminal 1: Start Backend
```bash
cd backend
npm run dev
```

### Terminal 2: Start Frontend (in new terminal)
```bash
cd frontend
npm start
```

Now you have:
- **Backend API**: http://localhost:5000
- **Frontend App**: http://localhost:3000

The React app proxies all `/api/*` requests to the backend automatically.

---

## Common Issues & Solutions

### Issue: "Port 5000 already in use"
```bash
lsof -ti:5000 | xargs kill -9
```

### Issue: "Port 3000 already in use"
```bash
lsof -ti:3000 | xargs kill -9
```

### Issue: "Module not found" errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: "Cannot find module axios"
```bash
cd frontend
npm install axios
```

### Issue: "CORS error when submitting forms"
1. Verify backend is running on port 5000
2. Check `.env` has `CLIENT_URL=http://localhost:3000`
3. Restart backend server

### Issue: Styles not loading
1. Clear browser cache (Ctrl+Shift+Delete)
2. Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Issue: "npm: command not found"
1. Ensure Node.js is installed: `node --version`
2. Restart terminal after installing Node.js
3. On Mac: `sudo npm install -g npm@latest`

---

## Development Workflow

### Add a New API Endpoint (Backend)
```javascript
// backend/routes/new-route.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ success: true, message: 'Your response' });
});

module.exports = router;
```

Then register in `server.js`:
```javascript
const newRoutes = require('./routes/new-route');
app.use('/api/new-endpoint', newRoutes);
```

### Add a New React Component (Frontend)
```javascript
// frontend/src/components/NewComponent.js
import React from 'react';

function NewComponent() {
  return (
    <section>
      <h2>New Component</h2>
    </section>
  );
}

export default NewComponent;
```

Then import in `App.js`:
```javascript
import NewComponent from './components/NewComponent';
// Add to JSX:
<NewComponent />
```

### Testing Forms

**Newsletter Subscription:**
1. Scroll to newsletter section
2. Enter test email → click Subscribe
3. Should see success notification
4. Check `backend/data/newsletter.json` for the record

**Contact Form:**
1. Fill all fields → click Send Message
2. Should see success notification
3. Check `backend/data/contacts.json` for the record

---

## Production Deployment

### Backend
```bash
cd backend
npm start
```

### Frontend Build
```bash
cd frontend
npm run build
# Deploy the /build folder to your hosting provider
```

---

## Security Reminders

✅ **Do:**
- Use environment variables for secrets
- Validate input on both frontend and backend
- Use HTTPS in production
- Keep dependencies updated

❌ **Don't:**
- Commit `.env` file to git
- Expose sensitive data in logs
- Use hardcoded credentials
- Skip input validation

---

## Useful Commands Reference

```bash
# Backend
cd backend && npm run dev          # Start dev server
npm start                           # Start production server
npm install package-name            # Install new package

# Frontend
cd frontend && npm start            # Start dev server
npm run build                       # Create production build
npm test                            # Run tests
npm install package-name            # Install new package
```

---

**Last Updated:** May 22, 2026
**Version:** 2.0.0 (React + Database-free)
