document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const usernameValue = document.getElementById('username').value.trim();
        const emailValue = document.getElementById('email').value.trim();
        const passwordValue = document.getElementById('password').value;

   
        let isValid = true;
        const messages = [];

       
        if (usernameValue.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

   
        if (!emailValue.includes('@') || !emailValue.includes('.')) {
            isValid = false;
            messages.push('Email must be valid (e.g., user@example.com).');
        }

       
        if (passwordValue.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        feedbackDiv.style.display = 'block'; 

        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745';
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545';
        }
    });
});
