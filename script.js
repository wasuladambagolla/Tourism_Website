// GlobalTravel - Simple Vanilla JavaScript

// Update authentication UI on page load
document.addEventListener('DOMContentLoaded', function () {
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

    const savedName = localStorage.getItem('registeredName');
    const savedPassword = localStorage.getItem('registeredPassword');

    // CHECK DATA: Compare typed vs saved
    if (username === savedName && password === savedPassword) {
        alert("Login Successful! Welcome back, " + savedName);
        // Redirect to your main landing page
        window.location.href = "index.html";

        // Save user to localStorage
        localStorage.setItem('user', username);

        // Show success message
        messageDiv.textContent = 'Success! Redirecting...';
        messageDiv.className = 'login-message show success';

        // Redirect after 1 second
        setTimeout(function () {
            window.location.href = 'index.html';
        }, 1000);
    } else {
        // Show error message
        messageDiv.textContent = 'Invalid credentials.';
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
            <a href="register.html" class="btn btn-register">Register</a>
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

    // Check if user is logged in
    if (!user) {
        alert('Ayubowan! Please sign in to book your ' + title);
        window.location.href = 'login.html';
        return;
    }

    // Move to booking page and pass the data in the URL
    const url = `booking.html?item=${encodeURIComponent(title)}&price=${encodeURIComponent(price)}`;
    window.location.href = url;

}
document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const item = urlParams.get('item');
    const price = urlParams.get('price');

    if (item && price) {
        document.getElementById('display-title').textContent = item;
        document.getElementById('display-price').textContent = price;
    }
});

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

    tabs.forEach(function (tab) {
        const href = tab.getAttribute('href');

        // Check if this tab matches the current page
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}
// register page
document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('Username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Simple validation logic
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }
    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }
    // SAVE DATA: Store the name and password in LocalStorage
    localStorage.setItem('registeredName', name);
    localStorage.setItem('registeredPassword', password);

    // Success simulation
    console.log("Registration attempt:", { name, email });
    alert(`Welcome to Beyond Ceylon, ${name}! Your account has been created.`);
    window.location.href = 'login.html';

    // You would typically send this data to a server here
});



function showForm() {
    document.getElementById('booking-card').style.display = 'none';
    document.getElementById('booking-user-form').style.display = 'block';
}

function hideForm() {
    document.getElementById('booking-card').style.display = 'block';
    document.getElementById('booking-user-form').style.display = 'none';
}



