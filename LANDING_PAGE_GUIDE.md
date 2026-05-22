# CHRELISA - Luxury Interior Design Landing Page

A modern, professional landing page for CHRELISA, a premium interior design and luxury home solutions company.

## 📁 Project Structure

```
CHRELISA/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet with responsive design
├── script.js           # JavaScript for interactions
└── README.md           # This file
```

## 🚀 Features

### 1. **Responsive Navigation**
   - Fixed navbar with smooth scrolling
   - Mobile-friendly hamburger menu
   - Active link highlighting
   - Logo with luxury branding

### 2. **Hero Section**
   - Full-screen hero with stunning visuals
   - Call-to-action button
   - Scroll indicator animation
   - Professional typography

### 3. **Product Categories**
   - 8 luxury product categories:
     - Tiles
     - Tap Fittings & Shower
     - Bathroom Ceramics
     - Door Handles & Locks
     - Chandeliers & Lamps
     - Luxury Furniture
     - Outdoor Furniture
     - Luxury Fabrics
   - Interactive hover effects
   - Responsive grid layout

### 4. **Featured Products**
   - Beautiful product cards with gradient backgrounds
   - Pricing display
   - Hover animations
   - "View Details" buttons

### 5. **Why Choose Us Section**
   - 4 key benefits highlighted
   - Premium quality focus
   - Icon-based presentation
   - Dark theme with gold accents

### 6. **Newsletter Subscription**
   - Email subscription form
   - Email validation
   - Success notifications

### 7. **Contact Section**
   - Contact information (address, phone, email, hours)
   - Contact form
   - Form validation
   - Success messages

### 8. **Footer**
   - Company information
   - Quick links
   - Product categories
   - Customer service links
   - Social media integration

## 🎨 Design Elements

- **Color Scheme:**
  - Primary: Dark Gray/Black (#1a1a1a)
  - Secondary: Gold (#d4af37)
  - Accent: Light Gray (#e8e8e8)
  - Background: Off-white (#f9f9f9)

- **Typography:**
  - Professional sans-serif fonts
  - Letter-spacing for elegance
  - Multiple font weights for hierarchy

- **Animations:**
  - Fade-in animations on scroll
  - Hover effects on interactive elements
  - Smooth transitions
  - Back-to-top button with fade animation

## 💻 How to Use

### 1. **Local Development**
   ```bash
   # Simply open the index.html file in your browser
   # Or use a local server:
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

### 2. **File Organization**
   - Keep all files in the root directory
   - CSS and JS files are linked in the HTML head
   - FontAwesome icons are loaded from CDN

### 3. **Customization**

   **Update Company Information:**
   - Edit contact details in the Contact section
   - Update business hours in the footer
   - Modify social media links

   **Change Colors:**
   - Edit CSS variables in `styles.css`:
     ```css
     :root {
         --primary-color: #1a1a1a;
         --secondary-color: #d4af37;
         /* ... */
     }
     ```

   **Add Product Images:**
   - Replace gradient backgrounds in `.product-image` with actual images:
     ```css
     .product-image {
         background-image: url('your-image-path.jpg');
     }
     ```

## 📱 Responsive Breakpoints

- **Desktop:** 1200px and above
- **Tablet:** 768px - 1199px
- **Mobile:** Below 768px
- **Small Mobile:** Below 480px

## 🔧 JavaScript Features

- Mobile menu toggle
- Form validation
- Email validation
- Notification system
- Smooth scrolling
- Intersection Observer for animations
- Back-to-top button
- Active navigation highlighting

## 📊 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🔍 SEO Considerations

- Meta description included
- Semantic HTML structure
- Heading hierarchy (H1 → H2 → H3)
- Alt text ready for images (add as needed)
- Mobile viewport meta tag

## 📝 Future Enhancements

- [ ] Add product image gallery
- [ ] Implement shopping cart functionality
- [ ] Add product filtering
- [ ] Blog/Resources section
- [ ] Customer testimonials
- [ ] Live chat support
- [ ] Product search functionality
- [ ] Multi-language support
- [ ] Database integration
- [ ] Payment gateway

## 🛠️ Development Tips

1. **Testing Forms:**
   - Test newsletter signup with valid/invalid emails
   - Test contact form with various inputs
   - Notifications should appear in bottom-right

2. **Mobile Testing:**
   - Use browser DevTools to test responsive design
   - Check menu toggle on mobile
   - Test touch interactions

3. **Performance:**
   - Minify CSS and JS for production
   - Optimize images before use
   - Consider lazy loading for images

## 📄 License

Created for CHRELISA - Premium Interior Design

## 🤝 Support

For customization or issues:
- Review the inline comments in code files
- Check browser console for any errors
- Ensure all files are in the correct location

---

**Last Updated:** May 22, 2026
**Version:** 1.0
