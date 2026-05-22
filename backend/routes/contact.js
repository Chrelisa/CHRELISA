const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const CONTACTS_FILE = path.join(__dirname, '../data/contacts.json');

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

// Helper: Read contacts from JSON file
const readContacts = () => {
  if (!fs.existsSync(CONTACTS_FILE)) return [];
  try {
    return JSON.parse(fs.readFileSync(CONTACTS_FILE, 'utf-8'));
  } catch {
    return [];
  }
};

// Helper: Write contacts to JSON file
const writeContacts = (contacts) => {
  fs.writeFileSync(CONTACTS_FILE, JSON.stringify(contacts, null, 2), 'utf-8');
};

// POST /api/contact - Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }

    // Save submission to local JSON file
    const contacts = readContacts();
    const newContact = {
      id: Date.now(),
      name,
      email,
      subject,
      message,
      submittedAt: new Date().toISOString()
    };
    contacts.push(newContact);
    writeContacts(contacts);
    console.log(`✉️  Saved contact submission from ${email} to local file.`);

    // Send emails (gracefully skipped if SMTP is not configured)
    let emailsSent = false;
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        await transporter.sendMail({
          from: process.env.FROM_EMAIL || 'noreply@chrelisa.com',
          to: process.env.ADMIN_EMAIL,
          subject: `New Contact Form Submission: ${subject}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          `
        });

        await transporter.sendMail({
          from: process.env.FROM_EMAIL || 'noreply@chrelisa.com',
          to: email,
          subject: 'We received your message - CHRELISA',
          html: `
            <h2>Thank you for contacting CHRELISA</h2>
            <p>Dear ${name},</p>
            <p>We have received your message and will get back to you as soon as possible.</p>
            <p>Best regards,<br>The CHRELISA Team</p>
          `
        });
        emailsSent = true;
      } catch (emailError) {
        console.warn('SMTP error sending contact notification emails:', emailError.message);
      }
    } else {
      console.log('SMTP credentials not configured. Skipping email notifications.');
    }

    res.json({
      success: true,
      message: "Message saved successfully! We'll be in touch.",
      emailsSent
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to process message',
      error: error.message
    });
  }
});

module.exports = router;
