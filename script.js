// Mobile Menu Toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    const submitButton = document.getElementById('submit-button');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Clear previous messages
            formMessage.textContent = '';
            formMessage.classList.remove('text-green-500', 'text-red-500');
            
            // Disable submit button and show loading state
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';

            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            try {
                const response = await fetch('http://127.0.0.1:5000/submit_message', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                const result = await response.json();
                console.log('Server response:', result);

                if (response.ok) {
                    formMessage.textContent = result.message;
                    formMessage.classList.add('text-green-500');
                    contactForm.reset();
                } else {
                    formMessage.textContent = result.message || 'An error occurred while sending the message.';
                    formMessage.classList.add('text-red-500');
                }
            } catch (error) {
                console.error('Error:', error);
                formMessage.textContent = 'Network error. Please make sure the server is running and try again.';
                formMessage.classList.add('text-red-500');
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = 'Send Message';
            }
        });
    }
});
