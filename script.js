// GlobalTravel - Simple Vanilla JavaScript

// Update authentication UI on page load
document.addEventListener('DOMContentLoaded', function() {
    updateAuthUI();
    highlightActiveTab();
    
    // Handle login form if on login page
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
});

// Handle Login
function handleLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('login-message');
    
    // Check credentials
    if (username === 'admin' && password === 'password123') {
        // Save user to localStorage
        localStorage.setItem('user', username);
        
        // Show success message
        messageDiv.textContent = 'Success! Redirecting...';
        messageDiv.className = 'login-message show success';
        
        // Redirect after 1 second
        setTimeout(function() {
            window.location.href = 'index.html';
        }, 1000);
    } else {
        // Show error message
        messageDiv.textContent = 'Invalid credentials. Try admin/password123';
        messageDiv.className = 'login-message show error';
    }
}

// Update Auth UI based on login status
function updateAuthUI() {
    const user = localStorage.getItem('user');
    const authSection = document.getElementById('auth-section');
    
    if (!authSection) return;
    
    if (user) {
        // User is logged in
        authSection.innerHTML = `
            <span style="color: white; margin-right: 15px; font-size: 0.9rem;">
                Hello, <strong>${user}</strong>
            </span>
            <button onclick="logout()" class="btn btn-login">Logout</button>
        `;
    } else {
        // User is not logged in
        authSection.innerHTML = `
            <a href="login.html" class="btn btn-login">Sign in</a>
            <a href="#" class="btn btn-register">Register</a>
        `;
    }
}

// Logout function
function logout() {
    localStorage.removeItem('user');
    window.location.reload();
}

// Process booking
function processBooking(title, price) {
    const user = localStorage.getItem('user');
    
    if (!user) {
        alert('Please sign in to book your trip to ' + title);
        window.location.href = 'login.html';
        return;
    }
    
    const confirmBooking = confirm(
        'Confirm booking for ' + title + ' at ' + price + '?\n\n' +
        'Our team will contact you shortly at your registered email.'
    );
    
    if (confirmBooking) {
        alert('Booking Successful! Check your email for details.');
    }
}

// Search function
function runSearch() {
    const query = document.getElementById('main-search').value;
    
    if (!query) {
        alert('Please enter a destination to start searching.');
        return;
    }
    
    alert('Searching for best deals in "' + query + '"...\n\nFound 120+ results!');
}

// Highlight active tab based on current page
function highlightActiveTab() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const tabs = document.querySelectorAll('.tab-item');
    
    tabs.forEach(function(tab) {
        const href = tab.getAttribute('href');
        
        // Check if this tab matches the current page
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}
