// Form submission handling and redirection to confirmation page
function submitForm() {
    const message = document.getElementById('message').value;  // Message content
    const email = document.querySelector('input[name="email"]').value;  // Email input value
    const response = document.querySelector('input[name="response"]:checked')?.value;  // Selected response type
    
    // If no message is entered
    if (!message.trim()) {
        alert('Please enter some thoughts!');
        return;
    }

    // Log data to console for debugging
    console.log('Message:', message);
    console.log('Email:', email);
    console.log('Response:', response);

    // Redirect to confirmation page after form submission
    window.location.href = 'confirmation.html';  // Redirection to the confirmation page
}

// Admin Login Link visibility (for testing purposes)
document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = false; // Replace with actual login check if needed
    const adminLogin = document.getElementById('adminLogin');
    
    if (isLoggedIn) {
        adminLogin.style.display = 'block';  // Show admin login if logged in
    }
});
