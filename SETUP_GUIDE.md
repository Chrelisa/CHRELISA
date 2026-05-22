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
cd /Users/kushananuththara/Desktop/CHRELISA
```

### 2. Initialize Git (if not already done)
```bash
git init
git add .
git commit -m "Initial commit: Full-stack CHRELISA application"
```

### 3. Verify Project Structure
```bash
tree -L 2 -I 'node_modules'
```

Expected structure:
```
CHRELISA/
├── backend/
├── frontend/
├── index.html
├── styles.css
├── script.js
├── LANDING_PAGE_GUIDE.md
└── README.md
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

This will install:
- `express` - Web framework
- `cors` - Cross-Origin Resource Sharing
- `nodemailer` - Email service
- `dotenv` - Environment variables
- `express-validator` - Form validation
- `mongoose` - MongoDB ODM (optional)
- `nodemon` - Auto-reload on changes

### Step 3: Configure Environment Variables
```bash
# .env file is already created, edit it:
nano .env  # or use your preferred editor
```

Update with your credentials:
```env
# Required fields
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
FROM_EMAIL=noreply@chrelisa.com
ADMIN_EMAIL=admin@chrelisa.com

# Optional fields
NODE_ENV=development
PORT=5000
CLIENT_URL=http://localhost:3000
MONGODB_URI=mongodb://localhost:27017/chrelisa
JWT_SECRET=your_jwt_secret_key
```

### Step 4: Setup Gmail App Password (Recommended)

1. Go to [Google Account Settings](https://myaccount.google.com)
2. Select "Security" from the left menu
3. Enable "2-Step Verification"
4. Scroll down to "App passwords"
5. Select "Mail" and "Windows Computer"
6. Copy the generated 16-character password
7. Use this password in `.env` as `SMTP_PASS`

### Step 5: Test Backend Server
```bash
# Development mode (with auto-reload)
npm run dev

# Or production mode
npm start
```

Expected output:
```
🚀 Server running on http://localhost:5000
📧 SMTP Host: smtp.gmail.com
```

### Step 6: Test API Endpoints

Open a new terminal and test:

```bash
# Health check
curl http://localhost:5000/api/health

# Get categories
curl http://localhost:5000/api/categories

# Get products
curl http://localhost:5000/api/products

# Test contact form (POST request)
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","subject":"Test","message":"Test message"}'
```

---

## Frontend Setup

### Step 1: Navigate to Frontend Directory (in a new terminal)
```bash
cd frontend
```

### Step 2: Install Dependencies
```bash
npm install
```

This will install:
- `react` - UI library
- `react-dom` - React DOM renderer
- `react-scripts` - Build tools
- `axios` - HTTP client
- `@fortawesome/fontawesome-free` - Icons

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

Note that the development build is not optimized.
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

---

## Common Issues & Solutions

### Issue: "Port 5000 already in use"

**Solution:**
```bash
# Find process using port 5000
lsof -i :5000

# Kill the process
kill -9 <PID>

# Or use this one-liner
lsof -ti:5000 | xargs kill -9
```

### Issue: "Port 3000 already in use"

**Solution:**
```bash
lsof -ti:3000 | xargs kill -9
```

### Issue: "Module not found" errors

**Solution:**
```bash
# Clear npm cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: "Cannot find module axios"

**Solution (Frontend):**
```bash
cd frontend
npm install axios
```

### Issue: "CORS error when submitting forms"

**Solution:**
1. Verify backend is running on port 5000
2. Check `.env` file has `CLIENT_URL=http://localhost:3000`
3. Restart backend server

### Issue: "Email not being sent"

**Debug steps:**
1. Verify SMTP credentials in `.env`
2. Check SMTP_HOST is correct (smtp.gmail.com for Gmail)
3. Ensure Gmail app password is being used (not regular password)
4. Check backend logs for error messages
5. Test SMTP credentials manually:

```bash
# Create test-email.js in backend directory
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

transporter.verify((error, success) => {
  if (error) {
    console.log('SMTP Error:', error);
  } else {
    console.log('SMTP Connection: OK');
  }
});

# Run with: node test-email.js
```

### Issue: Styles not loading

**Solution:**
1. Clear browser cache (Ctrl+Shift+Delete)
2. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
3. Verify CSS files are in correct locations

### Issue: "npm: command not found"

**Solution:**
1. Ensure Node.js is installed: `node --version`
2. Restart terminal after installing Node.js
3. On Mac, might need to run: `sudo npm install -g npm@latest`

---

## Development Workflow

### 1. Feature Development

**Backend (Add new API endpoint):**
```javascript
// In backend/routes/new-route.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Your response' });
});

module.exports = router;
```

Then register in `server.js`:
```javascript
const newRoutes = require('./routes/new-route');
app.use('/api/new-endpoint', newRoutes);
```

**Frontend (Add new component):**
```javascript
// In frontend/src/components/NewComponent.js
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

// Add to JSX
<NewComponent />
```

### 2. Testing Forms

**Newsletter Subscription:**
1. Scroll to newsletter section
2. Enter test email
3. Click Subscribe
4. Should see success notification
5. Check email for confirmation

**Contact Form:**
1. Fill all fields with test data
2. Click Send Message
3. Should see success notification
4. Check admin email for message

### 3. Debugging

**Backend Debugging:**
```bash
# Add console.log statements
console.log('Request received:', req.body);

# Check logs in terminal where npm run dev is running
```

**Frontend Debugging:**
```bash
# Open browser Developer Tools (F12)
# Go to Console tab to see errors
# Network tab to see API calls

# Add React DevTools extension to browser
```

### 4. Version Control

```bash
# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to remote (if configured)
git push origin main
```

---

## Production Deployment

### Backend (Heroku)
```bash
cd backend
heroku create chrelisa-api
git push heroku main
```

### Frontend (Netlify)
```bash
cd frontend
npm run build
# Deploy build folder to Netlify
```

---

## Performance Tips

1. **Backend:**
   - Use connection pooling for databases
   - Implement caching for frequently accessed data
   - Use compression middleware
   - Monitor API response times

2. **Frontend:**
   - Lazy load images and components
   - Minify and compress assets
   - Use React.memo for components
   - Implement virtual scrolling for long lists

---

## Security Reminders

✅ **Do:**
- Use environment variables for secrets
- Validate input on both frontend and backend
- Use HTTPS in production
- Keep dependencies updated
- Implement rate limiting
- Use secure headers

❌ **Don't:**
- Commit `.env` file to git
- Expose sensitive data in logs
- Use hardcoded credentials
- Skip input validation
- Use outdated dependencies

---

## Useful Commands Reference

```bash
# Backend
cd backend && npm run dev          # Start dev server
npm start                           # Start production server
npm install package-name           # Install new package
npm update                          # Update packages

# Frontend
cd frontend && npm start            # Start dev server
npm run build                       # Create production build
npm test                            # Run tests
npm install package-name           # Install new package

# Git
git status                          # Check status
git add .                           # Stage changes
git commit -m "message"             # Commit changes
git push                            # Push to remote
```

---

## Need Help?

- Check browser console (F12) for errors
- Check backend terminal for logs
- Read error messages carefully
- Google the error message
- Create an issue with detailed description

---

**Last Updated:** May 22, 2026
**Version:** 1.0.0
