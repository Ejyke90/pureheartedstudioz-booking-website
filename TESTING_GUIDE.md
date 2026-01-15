# Testing Guide for PureHearted Studioz

To fully test the booking functionality (Email and SMS), you need to configure the credentials and run the backend server.

## 1. Configuration

### EmailJS (Frontend)
Open `script.js` and replace the following placeholders with your actual EmailJS credentials:
- `YOUR_PUBLIC_KEY_HERE`
- `YOUR_SERVICE_ID_HERE`
- `YOUR_TEMPLATE_ID_HERE`

### Twilio (Backend)
Open `.env` (create it if it doesn't exist) or `server.js` and add your Twilio credentials:
- `TWILIO_ACCOUNT_SID`
- `TWILIO_AUTH_TOKEN`
- `TWILIO_PHONE_NUMBER`

## 2. Running the Backend (for SMS)
You need Node.js installed.
1. Open a terminal in the project folder.
2. Run `npm install` to install dependencies.
3. Run `node server.js` to start the server.
   - It should say: `Server running at http://localhost:3000`

## 3. Running the Frontend
You can open `index.html` directly in your browser, or serve it locally.
To serve it with Python (if installed):
`python3 -m http.server 8000`
Then visit `http://localhost:8000`

## 4. Testing Steps
1. Go to the "Book Now" section.
2. Fill in Name, Contact, Service, Date, and Time.
3. Click "Confirm Booking".
4. Check for the alert message:
   - If configured correctly, it should say "Confirmation sent via Email and SMS".
   - If the backend is off, it will say "Confirmation sent via Email" (if EmailJS works) or just "Booking Request Received".
