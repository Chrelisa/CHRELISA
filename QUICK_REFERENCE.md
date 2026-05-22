# CHRELISA - Quick Reference Card

## 🚀 Start Application

### Terminal 1 - Backend
```bash
cd backend
npm run dev
# Runs on http://localhost:5000
```

### Terminal 2 - Frontend  
```bash
cd frontend
npm start
# Opens http://localhost:3000 automatically
```

---

## 📁 File Locations

| Component | Location |
|-----------|----------|
| Main App | `frontend/src/App.js` |
| Components | `frontend/src/components/` |
| Backend Server | `backend/server.js` |
| API Routes | `backend/routes/` |
| Styles | `frontend/src/App.css` |
| Config | `backend/.env` |

---

## 🔌 API Quick Reference

```
GET    /api/health                    - Check server
GET    /api/categories                - All categories
GET    /api/products                  - All products
GET    /api/products?category=Tiles   - Filter products
POST   /api/contact                   - Send message
POST   /api/newsletter/subscribe      - Subscribe
```

Full docs: See `API_DOCUMENTATION.md`

---

## 📋 Available Scripts

### Backend
```bash
npm run dev     # Development (auto-reload)
npm start       # Production
npm install     # Install dependencies
```

### Frontend
```bash
npm start       # Development server
npm run build   # Production build
npm test        # Run tests
npm install     # Install dependencies
```

---

## ⚙️ Configuration

### Backend .env File
```env
PORT=5000
SMTP_HOST=smtp.gmail.com
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
FROM_EMAIL=noreply@chrelisa.com
ADMIN_EMAIL=admin@chrelisa.com
```

---

## 🔧 Common Commands

| Task | Command |
|------|---------|
| Kill port 5000 | `lsof -ti:5000 \| xargs kill -9` |
| Kill port 3000 | `lsof -ti:3000 \| xargs kill -9` |
| Reinstall deps | `rm -rf node_modules && npm install` |
| View logs | Check terminal where server runs |

---

## 📂 Project Structure

```
CHRELISA/
├── backend/        - Node.js/Express API
├── frontend/       - React application
├── *.md files      - Documentation
└── Original HTML   - Vanilla version
```

---

## 🧪 Test API

### Using curl
```bash
# Get categories
curl http://localhost:5000/api/categories

# Subscribe newsletter
curl -X POST http://localhost:5000/api/newsletter/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

---

## 🔍 Debug Tips

1. **Frontend Errors:**
   - Press F12 to open DevTools
   - Check Console tab
   - Check Network tab for API calls

2. **Backend Errors:**
   - Check terminal where `npm run dev` runs
   - Look for red text/error messages
   - Check .env file configuration

---

## 📧 Email Setup

1. Go to Google Account settings
2. Enable 2-Step Verification
3. Generate App Password
4. Copy 16-char password to .env `SMTP_PASS`

---

## 🚢 Deploy

### Backend (Heroku)
```bash
cd backend
heroku create app-name
git push heroku main
```

### Frontend (Netlify)
```bash
cd frontend
npm run build
# Upload 'build' folder to Netlify
```

---

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: Below 768px
- Small Mobile: Below 480px

---

## 🆘 Quick Troubleshooting

| Problem | Fix |
|---------|-----|
| Port in use | Kill process or use different port |
| Modules missing | `npm install` in that directory |
| CORS error | Check backend .env `CLIENT_URL` |
| Email not sent | Verify SMTP credentials in .env |
| Styles broken | Clear browser cache (Ctrl+Shift+Delete) |
| API 404 | Check backend is running on 5000 |

---

## 📚 Documentation

- `README.md` - Project overview
- `SETUP_GUIDE.md` - Detailed setup
- `API_DOCUMENTATION.md` - API reference
- `PROJECT_SUMMARY.md` - Complete summary

---

## 🎯 React Components

- `Navbar` - Navigation
- `Hero` - Landing section
- `Categories` - Product categories
- `Featured` - Featured products
- `Newsletter` - Email signup
- `Contact` - Contact form
- `Footer` - Footer

---

## 🔐 Environment Variables

**Required:**
- `SMTP_HOST`
- `SMTP_USER`
- `SMTP_PASS`
- `FROM_EMAIL`
- `ADMIN_EMAIL`

**Optional:**
- `MONGODB_URI` (for database)
- `JWT_SECRET` (for auth)

---

## 📞 Contact Info

- Default Phone: +1 (555) 123-4567
- Default Email: info@chrelisa.com
- Admin Email: admin@chrelisa.com

---

## 🎯 Next Tasks

1. ✅ Configure .env with email credentials
2. ✅ Run setup.sh or npm install
3. ✅ Start both servers
4. ✅ Test forms and API
5. ✅ Customize content/branding
6. ✅ Deploy to production

---

## 💾 Git Commands

```bash
git status          # Check changes
git add .           # Stage changes
git commit -m "msg" # Commit changes
git push            # Push to remote
```

---

**Version:** 1.0.0
**Updated:** May 22, 2026
**Status:** ✅ Ready to Use
