const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Email configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// Subscribe to newsletter
router.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body;

    // Validation
    if (!email) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email is required' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid email format' 
      });
    }

    // Send confirmation email
    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: email,
      subject: 'Welcome to CHRELISA Newsletter',
      html: `
        <h2>Welcome to CHRELISA!</h2>
        <p>Thank you for subscribing to our newsletter.</p>
        <p>You'll now receive exclusive offers, design inspiration, and product updates directly to your inbox.</p>
        <p>Best regards,<br>The CHRELISA Team</p>
      `
    });

    // Send notification to admin
    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Newsletter Subscription',
      html: `
        <p>New email subscription: ${email}</p>
      `
    });

    res.json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter' 
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to subscribe',
      error: error.message 
    });
  }
});

module.exports = router;
