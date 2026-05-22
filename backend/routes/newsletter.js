const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const NEWSLETTER_FILE = path.join(__dirname, '../data/newsletter.json');

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

// Helper: Read subscribers from JSON file
const readSubscribers = () => {
  if (!fs.existsSync(NEWSLETTER_FILE)) return [];
  try {
    return JSON.parse(fs.readFileSync(NEWSLETTER_FILE, 'utf-8'));
  } catch {
    return [];
  }
};

// Helper: Write subscribers to JSON file
const writeSubscribers = (subscribers) => {
  fs.writeFileSync(NEWSLETTER_FILE, JSON.stringify(subscribers, null, 2), 'utf-8');
};

// POST /api/newsletter/subscribe
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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }

    const formattedEmail = email.toLowerCase().trim();
    const subscribers = readSubscribers();

    // Check for duplicate
    const alreadySubscribed = subscribers.some(s => s.email === formattedEmail);
    if (alreadySubscribed) {
      return res.json({
        success: true,
        message: 'You are already subscribed to our newsletter!',
        alreadySubscribed: true
      });
    }

    // Save new subscriber
    subscribers.push({
      id: Date.now(),
      email: formattedEmail,
      subscribedAt: new Date().toISOString()
    });
    writeSubscribers(subscribers);
    console.log(`✉️  Saved new newsletter subscription for ${formattedEmail} to local file.`);

    // Send confirmation email (gracefully skipped if SMTP is not configured)
    let emailsSent = false;
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        await transporter.sendMail({
          from: process.env.FROM_EMAIL || 'noreply@chrelisa.com',
          to: email,
          subject: 'Welcome to CHRELISA Newsletter',
          html: `
            <h2>Welcome to CHRELISA!</h2>
            <p>Thank you for subscribing to our newsletter.</p>
            <p>You'll now receive exclusive offers, design inspiration, and product updates directly to your inbox.</p>
            <p>Best regards,<br>The CHRELISA Team</p>
          `
        });

        await transporter.sendMail({
          from: process.env.FROM_EMAIL || 'noreply@chrelisa.com',
          to: process.env.ADMIN_EMAIL,
          subject: 'New Newsletter Subscription',
          html: `<p>New email subscription: ${email}</p>`
        });
        emailsSent = true;
      } catch (emailError) {
        console.warn('SMTP error sending newsletter confirmation emails:', emailError.message);
      }
    } else {
      console.log('SMTP credentials not configured. Skipping welcome email.');
    }

    res.json({
      success: true,
      message: 'Successfully subscribed to newsletter!',
      emailsSent
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
