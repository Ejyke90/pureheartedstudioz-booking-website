# Booking Confirmation Setup Guide

## Overview
This guide will help you set up automated email and SMS confirmations for your booking form.

## Option 1: EmailJS (Email Confirmations Only) - EASIEST
**Cost:** Free for up to 200 emails/month  
**Setup Time:** 10 minutes  
**No Backend Required**

### Steps:
1. **Sign up at [EmailJS.com](https://www.emailjs.com/)**
2. **Create an email service** (Gmail, Outlook, etc.)
3. **Create an email template** with these variables:
   - `{{name}}` - Customer name
   - `{{contact}}` - Phone/Email
   - `{{service}}` - Service selected
   - `{{date}}` - Appointment date
4. **Get your credentials:**
   - Public Key (User ID)
   - Service ID
   - Template ID
5. **Update the JavaScript file** with your credentials (see below)

---

## Option 2: Backend with Email & SMS - RECOMMENDED
**Cost:** ~$15-25/month (Twilio + Hosting)  
**Setup Time:** 1-2 hours  
**Requires:** Basic technical knowledge or developer help

### What You'll Need:
1. **SendGrid** or **Mailgun** for emails (free tier available)
2. **Twilio** for SMS ($0.0075 per SMS)
3. **Backend server** (Node.js on Vercel, Netlify, or Railway - free tiers available)

### Benefits:
- Send both email AND text confirmations
- Store bookings in a database
- More reliable and professional
- Can send confirmations to both client AND business owner

---

## Option 3: No-Code Solution - Zapier/Make
**Cost:** Free tier available  
**Setup Time:** 30 minutes  
**No Coding Required**

### Steps:
1. Use **Formspree** or **Google Forms** to collect bookings
2. Connect to **Zapier** or **Make.com**
3. Set up automation:
   - Trigger: New form submission
   - Action 1: Send email via Gmail
   - Action 2: Send SMS via Twilio

---

## Quick Start: EmailJS Implementation

I've updated your `script.js` to support EmailJS. To activate it:

1. Sign up at https://www.emailjs.com/
2. Get your credentials
3. Open `script.js` and replace:
   ```javascript
   const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
   const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
   ```

4. Uncomment the EmailJS code in the form submission handler

---

## For SMS Confirmations

To add SMS, you'll need a backend. I recommend:

### Option A: Use a Developer
Hire someone on Fiverr/Upwork to set up a simple Node.js backend ($50-150)

### Option B: DIY with Tutorial
Follow my step-by-step guide in `BACKEND_SETUP.md` (coming next)

---

## Recommended Approach

**For now:** Start with EmailJS for email confirmations (quick and free)  
**Next step:** Upgrade to full backend solution when you're ready

Contact me if you need help with implementation!
