document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const signInButton = document.querySelector('.main-btn');
    const socialButtons = document.querySelectorAll('.social-btn');

    // Check if user is already logged in
    if (localStorage.getItem('isLoggedIn') === 'true') {
        window.location.href = 'homepage.html';
        return;
    }

    // Handle sign in button click
    signInButton.addEventListener('click', function() {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Basic password validation
        if (password.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
        }

        // Here you would typically make an API call to your backend
        // For now, we'll just simulate a successful login
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        
        // Redirect to dashboard
        window.location.href = 'homepage.html';
    });

    // Handle social login buttons
    socialButtons.forEach(button => {
        button.addEventListener('click', function() {
            const provider = this.textContent.trim();
            alert(`Sign in with ${provider} functionality would be implemented here`);
        });
    });

    // Handle Enter key press
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            signInButton.click();
        }
    });
}); 