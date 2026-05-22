# CHRELISA API Documentation

## Base URL
- **Development:** `http://localhost:5000`
- **Production:** (to be configured)

## Authentication
Currently, the API doesn't require authentication. JWT authentication can be added in future versions.

---

## Endpoints

### 1. Health Check

Check if the server is running.

**Request:**
```
GET /api/health
```

**Response (200 OK):**
```json
{
  "status": "Server is running"
}
```

---

### 2. Contact Form

Submit a contact form message. Sends emails to both admin and user.

**Request:**
```
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Inquiry about furniture",
  "message": "I would like more information about your luxury furniture collection."
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

**Response (400 Bad Request):**
```json
{
  "success": false,
  "message": "All fields are required"
}
```

**Response (500 Internal Server Error):**
```json
{
  "success": false,
  "message": "Failed to send message",
  "error": "SMTP connection error"
}
```

**Required Fields:**
- `name` (string, min 2 chars)
- `email` (string, valid email format)
- `subject` (string, min 3 chars)
- `message` (string, min 10 chars)

**Emails Sent:**
- Admin notification at `ADMIN_EMAIL`
- Confirmation email to user

---

### 3. Newsletter

#### 3.1 Subscribe to Newsletter

**Request:**
```
POST /api/newsletter/subscribe
Content-Type: application/json

{
  "email": "user@example.com"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Successfully subscribed to newsletter"
}
```

**Response (400 Bad Request):**
```json
{
  "success": false,
  "message": "Invalid email format"
}
```

**Required Fields:**
- `email` (string, valid email format)

**Emails Sent:**
- Subscription confirmation to user
- Admin notification

---

### 4. Categories

#### 4.1 Get All Categories

Retrieve all product categories.

**Request:**
```
GET /api/categories
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Tiles",
      "icon": "border-all",
      "description": "Exquisite ceramic and porcelain tiles for every surface",
      "link": "/collections/tiles"
    },
    {
      "id": 2,
      "name": "Tap Fittings & Shower",
      "icon": "shower",
      "description": "Premium bathroom fixtures with modern design",
      "link": "/collections/fittings"
    },
    // ... more categories
  ]
}
```

---

#### 4.2 Get Single Category

Retrieve a specific category by ID.

**Request:**
```
GET /api/categories/1
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Tiles",
    "icon": "border-all",
    "description": "Exquisite ceramic and porcelain tiles for every surface",
    "link": "/collections/tiles"
  }
}
```

**Response (404 Not Found):**
```json
{
  "success": false,
  "message": "Category not found"
}
```

---

### 5. Products

#### 5.1 Get All Products

Retrieve all products, with optional filtering.

**Request:**
```
GET /api/products
```

**Query Parameters:**
- `category` (optional): Filter by category name (e.g., `?category=Tiles`)

**Response (200 OK):**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Modern Ceramic Tiles",
      "category": "Tiles",
      "price": 45,
      "currency": "$",
      "unit": "m²",
      "image": "modern-ceramic-tiles",
      "gradient": "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
      "description": "Contemporary ceramic tiles with premium finish"
    },
    // ... more products
  ],
  "total": 6
}
```

---

#### 5.2 Filter Products by Category

**Request:**
```
GET /api/products?category=Tiles
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Modern Ceramic Tiles",
      "category": "Tiles",
      "price": 45,
      "currency": "$",
      "unit": "m²",
      // ...
    }
  ],
  "total": 1
}
```

---

#### 5.3 Get Single Product

**Request:**
```
GET /api/products/1
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Modern Ceramic Tiles",
    "category": "Tiles",
    "price": 45,
    "currency": "$",
    "unit": "m²",
    "image": "modern-ceramic-tiles",
    "gradient": "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
    "description": "Contemporary ceramic tiles with premium finish"
  }
}
```

**Response (404 Not Found):**
```json
{
  "success": false,
  "message": "Product not found"
}
```

---

#### 5.4 Get Featured Products

**Request:**
```
GET /api/products/featured
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": [
    // First 6 products
  ]
}
```

---

## Error Handling

### Standard Error Response

```json
{
  "success": false,
  "message": "Error description",
  "error": "Additional error details (development only)"
}
```

### Common Status Codes

- **200 OK**: Request successful
- **400 Bad Request**: Invalid input or missing required fields
- **404 Not Found**: Resource not found
- **500 Internal Server Error**: Server error

---

## CORS Headers

The API uses CORS. Requests must come from the configured `CLIENT_URL` (default: `http://localhost:3000`).

**Response Headers:**
```
Access-Control-Allow-Origin: http://localhost:3000
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Content-Type
Access-Control-Allow-Credentials: true
```

---

## Rate Limiting

Currently, there is no rate limiting. For production, implement rate limiting middleware.

---

## Examples

### Using JavaScript/Axios

```javascript
const axios = require('axios');

const API_URL = 'http://localhost:5000/api';

// Get all categories
async function getCategories() {
  try {
    const response = await axios.get(`${API_URL}/categories`);
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error.response.data);
  }
}

// Submit contact form
async function submitContact(formData) {
  try {
    const response = await axios.post(`${API_URL}/contact`, formData);
    console.log('Message sent:', response.data);
  } catch (error) {
    console.error('Error:', error.response.data);
  }
}

// Subscribe to newsletter
async function subscribe(email) {
  try {
    const response = await axios.post(`${API_URL}/newsletter/subscribe`, { email });
    console.log('Subscribed:', response.data);
  } catch (error) {
    console.error('Error:', error.response.data);
  }
}

// Get products by category
async function getProductsByCategory(category) {
  try {
    const response = await axios.get(`${API_URL}/products?category=${category}`);
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error.response.data);
  }
}
```

### Using cURL

```bash
# Get all categories
curl http://localhost:5000/api/categories

# Get specific product
curl http://localhost:5000/api/products/1

# Filter products by category
curl "http://localhost:5000/api/products?category=Tiles"

# Submit contact form
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Inquiry",
    "message": "I am interested in your products"
  }'

# Subscribe to newsletter
curl -X POST http://localhost:5000/api/newsletter/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com"}'
```

---

## Future Endpoints (Planned)

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/cart` - Get shopping cart
- `POST /api/cart/add` - Add item to cart
- `DELETE /api/cart/remove/:id` - Remove item from cart
- `POST /api/orders` - Place order
- `GET /api/orders/:id` - Get order details
- `GET /api/reviews` - Get product reviews
- `POST /api/reviews` - Submit product review

---

## Environment Variables Required

```env
# Server
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:3000

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
FROM_EMAIL=noreply@chrelisa.com
ADMIN_EMAIL=admin@chrelisa.com

# Database (Optional)
MONGODB_URI=mongodb://localhost:27017/chrelisa

# JWT (For future auth)
JWT_SECRET=your_secret_key
```

---

## Deployment Considerations

1. **Security:**
   - Use HTTPS in production
   - Implement rate limiting
   - Validate and sanitize all inputs
   - Use helmet.js for security headers

2. **Performance:**
   - Implement caching
   - Use compression middleware
   - Monitor API response times
   - Consider CDN for static assets

3. **Monitoring:**
   - Log all requests and errors
   - Monitor server resources
   - Set up alerts for failures
   - Track API usage metrics

---

## Support

For API issues or questions, please create an issue in the repository or contact support@chrelisa.com

---

**Last Updated:** May 22, 2026
**Version:** 1.0.0
**Maintainer:** CHRELISA Dev Team
