const express = require('express');
const cors = require('cors');
const twilio = require('twilio');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));
app.use(express.json({ limit: '10mb' }));

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Twilio Configuration with proper error handling
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

let client = null;
let twilioConfigured = false;

if (accountSid && authToken && twilioPhoneNumber && 
    accountSid !== 'YOUR_TWILIO_ACCOUNT_SID' && 
    authToken !== 'YOUR_TWILIO_AUTH_TOKEN' && 
    twilioPhoneNumber !== 'YOUR_TWILIO_PHONE_NUMBER') {
    try {
        client = new twilio(accountSid, authToken);
        twilioConfigured = true;
        console.log('✅ Twilio configured successfully');
    } catch (error) {
        console.warn('⚠️ Twilio configuration failed:', error.message);
    }
} else {
    console.warn('⚠️ Twilio not configured - SMS functionality disabled (MVP mode)');
}

// Booking endpoint (handles both SMS and logging)
app.post('/api/booking', async (req, res) => {
    const { name, email, service, date } = req.body;

    // Validate required fields
    if (!name || !email || !service || !date) {
        return res.status(400).json({ 
            error: 'Missing required fields',
            required: ['name', 'email', 'service', 'date']
        });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
    }

    // Log booking (for MVP tracking)
    const booking = {
        id: Date.now().toString(),
        name,
        email,
        service,
        date,
        timestamp: new Date().toISOString(),
        status: 'pending'
    };
    
    console.log('📅 New booking received:', JSON.stringify(booking, null, 2));

    // Try to send SMS if configured
    let smsResult = null;
    if (twilioConfigured && client) {
        try {
            // Extract phone from email or use a default format
            // In MVP, we'll skip SMS for now but keep the structure
            console.log('📱 SMS functionality available but skipped in MVP');
            smsResult = { status: 'skipped', reason: 'MVP mode' };
        } catch (error) {
            console.warn('SMS sending failed:', error.message);
            smsResult = { status: 'failed', error: error.message };
        }
    }

    res.status(200).json({ 
        success: true, 
        bookingId: booking.id,
        message: 'Booking received successfully',
        sms: smsResult || { status: 'not_configured' }
    });
});

// Legacy SMS endpoint for backward compatibility
app.post('/api/send-sms', async (req, res) => {
    const { name, phone, service, date, time } = req.body;

    if (!twilioConfigured) {
        return res.status(200).json({ 
            success: true, 
            message: 'SMS not configured - MVP mode',
            messageId: 'mvp_' + Date.now()
        });
    }

    if (!name || !phone || !service || !date) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const message = await client.messages.create({
            body: `Booking Confirmed!\n\nHi ${name}, your appointment for ${service} on ${date} at PureHearted Studioz has been confirmed.\n\nLocation: 25 Mutual St, Downtown Toronto`,
            from: twilioPhoneNumber,
            to: phone
        });

        console.log(`📱 SMS sent to ${phone}: ${message.sid}`);
        res.status(200).json({ success: true, messageId: message.sid });
    } catch (error) {
        console.error('❌ Error sending SMS:', error);
        res.status(500).json({ error: 'Failed to send SMS', details: error.message });
    }
});

// Error handling middleware
app.use((error, req, res, next) => {
    console.error('❌ Server error:', error);
    res.status(500).json({ error: 'Internal server error' });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
});

app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
    console.log(`📊 Health check: http://localhost:${port}/health`);
    console.log(`📧 Twilio configured: ${twilioConfigured ? '✅' : '❌'}`);
});
