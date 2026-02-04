# Beyond Ceylon - Tourism & Hospitality Booking Website

## Project Overview

Beyond Ceylon is a simple, clean tourism and hospitality booking website built with **pure HTML, CSS, and JavaScript** (no frameworks). It demonstrates a professional booking system for hotels, tours, local guides, and vehicle rentals.

---

## Features

✅ **4 Main Sections:**
- **Stays** - Hotel and resort bookings
- **Tours** - Guided tour packages
- **Guides** - Local expert guides
- **Car Rentals** - Vehicle rental options

✅ **Authentication System:**
- Login page with session management
- Demo credentials: `admin` / `password123`
- User session stored in browser localStorage

✅ **Interactive Functionality:**
- Book Now buttons (require login)
- Search functionality
- Responsive design (mobile-friendly)
- Tab navigation between sections

✅ **Professional Design:**
- Modern color scheme (Blue #003580 + Yellow #ffb700)
- Card-based layout
- Smooth hover effects and transitions
- Clean typography

---

## Project Structure

```
globaltravel_vanilla/
├── index.html          # Home page (Stays)
├── login.html          # Login page
├── tours.html          # Tours page
├── guides.html         # Local guides page
├── rentals.html        # Car rentals page
├── css/
│   └── style.css       # All styling (no dependencies)
├── js/
│   └── script.js       # All functionality (vanilla JS)
└── README.md           # This file
```

---

## How to Run

### Direct File Opening
1. Open `index.html` in any web browser
2. Navigate using the tab menu
3. Test the login system with registered credentials

---

## Code Structure

### HTML Files
Each page follows the same structure:
- Header with logo and auth buttons
- Tab navigation menu
- Main content area with card grid
- Footer with links

### CSS (style.css)
- **No external dependencies** - pure CSS
- Organized by sections (header, navigation, cards, footer, etc.)
- Responsive design with media queries
- CSS variables for colors and spacing

### JavaScript (script.js)
Simple vanilla JavaScript with these functions:
- `handleLogin()` - Process login form
- `updateAuthUI()` - Update header based on login status
- `logout()` - Clear session
- `processBooking()` - Handle booking clicks
- `runSearch()` - Search functionality
- `highlightActiveTab()` - Highlight current page tab

---

## Authentication System

### How It Works
1. User enters credentials on login page
2. JavaScript checks if `username === 'admin'` and `password === 'password123'`
3. If correct, username is saved to `localStorage`
4. User is redirected to home page
5. Header updates to show "Hello, admin" with Logout button

### Session Management
- Session stored in browser's `localStorage`
- Persists across page refreshes
- Cleared when user clicks Logout

---

## Booking System

### How It Works
1. User clicks on any property/tour/guide/vehicle card
2. JavaScript checks if user is logged in
3. If not logged in, user is redirected to login page
4. If logged in, confirmation dialog appears
5. Upon confirmation, success message is shown

### Example Code
```javascript
function processBooking(title, price) {
    const user = localStorage.getItem('user');
    
    if (!user) {
        alert('Please sign in to book your trip');
        window.location.href = 'login.html';
        return;
    }
    
    const confirm = confirm('Confirm booking for ' + title + '?');
    if (confirm) {
        alert('Booking Successful!');
    }
}
```

---

## Color Scheme

| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Blue | #003580 | Header, buttons, badges |
| Accent Yellow | #ffb700 | Search box, highlights |
| Light Gray | #f7f8fa | Background |
| Dark Text | #1a1a1a | Main text |
| Light Text | #4a4a4a | Secondary text |

---

## Responsive Design

The website is fully responsive:
- **Desktop** - 3-column card grid
- **Tablet** - 2-column card grid
- **Mobile** - 1-column card grid
- Flexible navigation and search box

---

## Key JavaScript Functions

### 1. Authentication
```javascript
// Login handler
function handleLogin(e) {
    // Check credentials and save to localStorage
}

// Update UI based on login status
function updateAuthUI() {
    // Show different buttons for logged in/out users
}
```

### 2. Booking
```javascript
// Process booking with authentication check
function processBooking(title, price) {
    // Verify user is logged in
    // Show confirmation dialog
    // Handle booking
}
```

### 3. Navigation
```javascript
// Highlight active tab based on current page
function highlightActiveTab() {
    // Compare current URL with tab links
    // Add 'active' class to matching tab
}
```

---

## Customization Guide

### Change Colors
Edit `css/style.css` - look for color variables:
```css
:root {
    --primary-blue: #003580;
    --accent-yellow: #ffb700;
}
```

### Add New Properties/Tours/Guides
Edit the respective HTML file and add a new card:
```html
<div class="property-card" onclick="processBooking('Title', '$Price')">
    <div class="card-image">
        <img src="image-url" alt="Description">
    </div>
    <div class="card-body">
        <h3>Property Name</h3>
        <div class="location">📍 Location</div>
        <div class="price-box">
            <div class="price-value">$Price</div>
        </div>
    </div>
</div>
```

### Change Login Credentials
Edit `js/script.js` - modify the `handleLogin()` function:
```javascript
if (username === 'your-username' && password === 'your-password') {
    // Login successful
}
```

---

## Browser Compatibility

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Learning Outcomes

This project demonstrates:
1. **HTML Structure** - Semantic markup and form handling
2. **CSS Styling** - Layout, flexbox, grid, responsive design
3. **JavaScript Fundamentals** - DOM manipulation, event handling, localStorage
4. **Web Development Best Practices** - Clean code, organization, accessibility

---

## Future Enhancements

Possible features to add:
- Backend database for persistent bookings
- Payment integration
- Review and rating system
- Advanced search filters
- Booking confirmation emails
- User profile page

---

## License

This project is created for educational purposes.

---

## Contact & Support

For questions or improvements, refer to the code comments and structure.

**Happy Learning! 🌍✈️**
