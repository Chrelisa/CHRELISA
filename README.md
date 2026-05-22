# CHRELISA - Luxury Interior Design Platform

A modern, full-stack web application built with React (frontend) and Node.js/Express (backend) for a luxury interior design company.

## 📁 Project Structure

```
CHRELISA/
├── backend/
│   ├── routes/
│   │   ├── contact.js          # Contact form API
│   │   ├── newsletter.js       # Newsletter subscription API
│   │   ├── categories.js       # Product categories API
│   │   └── products.js         # Products API
│   ├── server.js               # Main server file
│   ├── .env                    # Environment variables
│   ├── package.json            # Backend dependencies
│   └── README.md               # Backend documentation
│
├── frontend/
│   ├── public/
│   │   └── index.html          # HTML entry point
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js       # Navigation component
│   │   │   ├── Hero.js         # Hero section
│   │   │   ├── About.js        # About section
│   │   │   ├── Categories.js   # Product categories
│   │   │   ├── Featured.js     # Featured products
│   │   │   ├── WhyChooseUs.js  # Benefits section
│   │   │   ├── Newsletter.js   # Newsletter form
│   │   │   ├── Contact.js      # Contact form
│   │   │   ├── Footer.js       # Footer
│   │   │   └── Notification.js # Notification system
│   │   ├── App.js              # Main app component
│   │   ├── App.css             # App styling
│   │   ├── index.js            # React entry point
│   │   └── index.css           # Global styles
│   ├── package.json            # Frontend dependencies
│   └── README.md               # Frontend documentation
│
└── README.md                   # This file
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- A code editor (VS Code recommended)

### Installation & Setup

#### 1. Clone and Navigate to Project

```bash
cd /Users/kushananuththara/Desktop/CHRELISA
```

#### 2. Setup Backend

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Configure environment variables
# Edit .env file with your settings:
# - SMTP credentials for email functionality
# - MongoDB URI (if using database)
# - PORT and other settings

# Start the backend server
npm run dev  # For development with nodemon
# or
npm start    # For production
```

The backend server will run on `http://localhost:5000`

#### 3. Setup Frontend (in a new terminal)

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
```

The frontend will automatically open on `http://localhost:3000`

## 🔧 Backend API Endpoints

### Contact Form
- **POST** `/api/contact`
  - Sends a message and notification emails
  - Body: `{ name, email, subject, message }`

### Newsletter
- **POST** `/api/newsletter/subscribe`
  - Subscribes email to newsletter
  - Body: `{ email }`

### Categories
- **GET** `/api/categories` - Get all categories
- **GET** `/api/categories/:id` - Get specific category

### Products
- **GET** `/api/products` - Get all products
- **GET** `/api/products?category=Tiles` - Filter by category
- **GET** `/api/products/:id` - Get specific product
- **GET** `/api/products/featured` - Get featured products

## 📋 Environment Variables

### Backend (.env)

```
NODE_ENV=development
PORT=5000
CLIENT_URL=http://localhost:3000

# Email Configuration (Gmail example)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
FROM_EMAIL=noreply@chrelisa.com
ADMIN_EMAIL=admin@chrelisa.com

# Database
MONGODB_URI=mongodb://localhost:27017/chrelisa

# JWT (for future auth)
JWT_SECRET=your_jwt_secret_key_here
```

### Gmail App Password Setup
1. Enable 2-factor authentication on Gmail
2. Generate an app password
3. Use the app password in `SMTP_PASS`

## 🎨 Features

### Frontend
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth animations and transitions
- ✅ Dynamic navigation
- ✅ Interactive product showcase
- ✅ Contact form with validation
- ✅ Newsletter subscription
- ✅ Real-time notifications
- ✅ API integration with backend

### Backend
- ✅ RESTful API
- ✅ Email notifications (nodemailer)
- ✅ CORS enabled
- ✅ Form validation
- ✅ Error handling
- ✅ Environment variables
- ✅ API routes for products, categories, contact, newsletter

## 📦 Technologies Used

### Frontend
- React 18
- Axios (HTTP client)
- CSS3 (flexbox, grid)
- FontAwesome icons
- React Scripts

### Backend
- Express.js
- Node.js
- Nodemailer (email service)
- CORS
- dotenv (environment variables)

## 🔒 Security Best Practices

1. Never commit `.env` file to version control
2. Use environment variables for sensitive data
3. Validate all form inputs (frontend + backend)
4. Use CORS to restrict API access
5. Implement rate limiting for production
6. Use HTTPS in production
7. Keep dependencies updated

## 🚢 Deployment

### Backend Deployment (Heroku example)
```bash
cd backend
heroku create chrelisa-backend
git push heroku main
```

### Frontend Deployment (Netlify example)
```bash
cd frontend
npm run build
# Deploy the build folder to Netlify
```

## 📝 API Usage Examples

### Contact Form
```javascript
const response = await axios.post('/api/contact', {
  name: 'John Doe',
  email: 'john@example.com',
  subject: 'Inquiry',
  message: 'Hello...'
});
```

### Newsletter Subscription
```javascript
const response = await axios.post('/api/newsletter/subscribe', {
  email: 'user@example.com'
});
```

### Fetch Products
```javascript
const response = await axios.get('/api/products');
// or filter by category
const response = await axios.get('/api/products?category=Tiles');
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5000 (backend)
lsof -ti:5000 | xargs kill -9

# Kill process on port 3000 (frontend)
lsof -ti:3000 | xargs kill -9
```

### CORS Errors
- Check `CLIENT_URL` in backend `.env`
- Ensure backend is running on correct port
- Verify frontend proxy setting in `package.json`

### Email Not Working
- Verify SMTP credentials in `.env`
- Check firewall/antivirus settings
- For Gmail, use app password (not regular password)
- Enable "Less secure app access" if not using app password

### Module Not Found Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Express.js Documentation](https://expressjs.com)
- [Nodemailer Documentation](https://nodemailer.com)
- [Axios Documentation](https://axios-http.com)

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/AmazingFeature`)
2. Commit changes (`git commit -m 'Add some AmazingFeature'`)
3. Push to branch (`git push origin feature/AmazingFeature`)
4. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👥 Support

For support, email support@chrelisa.com or create an issue in the repository.

---

**Last Updated:** May 22, 2026
**Version:** 1.0.0