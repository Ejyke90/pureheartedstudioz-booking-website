# PureHearted Studioz - Professional Hair Booking Website

A modern, responsive booking website for PureHearted Studioz hair salon featuring dynamic calendar booking, service selection, and automated notifications.

## 🚀 Features

- **Dynamic Calendar**: Auto-generates current month with past date restrictions
- **Service Portfolio**: Professional showcase of hair services with high-quality images
- **Smart Booking System**: Modal-based booking with service pre-selection
- **Responsive Design**: Mobile-first design that works on all devices
- **Email Notifications**: EmailJS integration for booking confirmations
- **SMS Notifications**: Twilio integration for text confirmations (optional)
- **Modern UI/UX**: Glass morphism effects, smooth animations, professional styling

## 🛠 Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js, Express.js
- **Notifications**: EmailJS, Twilio
- **Deployment**: Vercel (frontend), Railway (backend)

## 📦 Quick Start

### MVP Deployment (5 minutes)
```bash
# Clone the repository
git clone https://github.com/Ejyke90/pureheartedstudioz-booking-website.git
cd pureheartedstudioz-booking-website

# Deploy to Vercel (frontend only)
npx vercel --prod
```

The website works immediately with:
- ✅ Dynamic calendar
- ✅ Booking form (shows confirmation)
- ✅ All visual features
- ✅ Mobile responsive design

### Full Stack Setup (15 minutes)

1. **Backend (Railway)**:
   - Deploy `server.js` to Railway
   - Add environment variables (see `.env.example`)

2. **Frontend Configuration**:
   - Update EmailJS credentials in `index.html` and `script.js`
   - Deploy to Vercel

## 🔧 Configuration

### EmailJS Setup
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Create service and template
3. Update credentials in:
   - `index.html`: Line 20 (`YOUR_PUBLIC_KEY`)
   - `script.js`: Lines 246-247 (`YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`)

### Twilio Setup (Optional)
1. Sign up at [twilio.com](https://www.twilio.com)
2. Add credentials to Railway environment variables
3. Backend automatically detects and enables SMS

## 📱 Supported Services

- Loc Retwist
- Single Braids (Box Braids)
- Starter Locs
- Cornrows with Design
- Straight Back Cornrows
- Twists
- Long/Medium/Short Braids
- Hair Consultation

## 🎨 Design Features

- **Professional Color Scheme**: Gold (#d4af37) and dark brown (#2c1810)
- **Modern Typography**: Playfair Display + Inter fonts
- **Smooth Animations**: Intersection Observer API for performance
- **Glass Morphism**: Modern UI effects with backdrop filters
- **Mobile Optimized**: Responsive breakpoints for all devices

## 📊 Scaling

Current setup handles:
- **Users**: 100+ concurrent (Railway free tier)
- **Emails**: 200/month (EmailJS free tier)
- **SMS**: Pay per use (~$0.0075 each)
- **Frontend**: Unlimited (Vercel CDN)

## 📁 Project Structure

```
├── index.html          # Main website
├── style.css           # Styling and animations
├── script.js           # Interactive functionality
├── server.js           # Backend API
├── package.json        # Dependencies
├── vercel.json         # Vercel deployment config
├── railway.toml        # Railway deployment config
├── netlify.toml        # Netlify deployment config
├── .env.example        # Environment variables template
├── DEPLOYMENT_GUIDE.md # Detailed deployment instructions
└── assets/             # Images and media

```

## 🚀 Deployment Options

1. **Vercel** (Recommended): Frontend deployment
2. **Railway**: Backend deployment
3. **Netlify**: Alternative frontend option

See `DEPLOYMENT_GUIDE.md` for detailed instructions.

## 📞 Support

For deployment assistance or customization, refer to the documentation files:
- `DEPLOYMENT_GUIDE.md` - Step-by-step deployment
- `BOOKING_SETUP_GUIDE.md` - Email/SMS configuration
- `TESTING_GUIDE.md` - Local testing instructions

## 📄 License

Private project for PureHearted Studioz. All rights reserved.
