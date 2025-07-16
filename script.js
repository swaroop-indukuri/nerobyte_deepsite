// 📱 Mobile Menu Toggle
document.getElementById('mobile-menu-button').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// 📩 Form Submission with Backend
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    const submitButton = document.getElementById('submit-button');

    if (contactForm) {
        contactForm.addEventListener('submit', async function (e) {
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

    // 🌙 Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('change', function () {
            const isDark = this.checked;

            document.body.classList.toggle('bg-gray-900', isDark);
            document.body.classList.toggle('text-gray-100', isDark);
            document.body.classList.toggle('bg-gray-50', !isDark);
            document.body.classList.toggle('text-gray-800', !isDark);

            const header = document.querySelector('header');
            if (header) {
                header.classList.toggle('bg-gray-800', isDark);
                header.classList.toggle('bg-white', !isDark);
                header.classList.toggle('shadow-lg', isDark);
                header.classList.toggle('shadow-md', !isDark);
            }

            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.classList.toggle('text-gray-300', isDark);
                link.classList.toggle('text-gray-800', !isDark);
            });

            const logo = document.querySelector('.text-gray-800') || document.querySelector('.text-gray-300');
            if (logo) {
                logo.classList.toggle('text-gray-300', isDark);
                logo.classList.toggle('text-gray-800', !isDark);
            }

            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                if (section.id !== 'home') {
                    section.classList.toggle('bg-gray-800', isDark);
                    section.classList.toggle('bg-white', !isDark);
                    section.classList.toggle('bg-gray-50', !isDark);
                }
            });

            const cards = document.querySelectorAll('.service-card, .bg-gray-50, .bg-gray-700');
            cards.forEach(card => {
                card.classList.toggle('bg-gray-700', isDark);
                card.classList.toggle('bg-white', !isDark);
                card.classList.toggle('bg-gray-50', !isDark);
            });

            const texts = document.querySelectorAll('.text-gray-400, .text-gray-600');
            texts.forEach(text => {
                text.classList.toggle('text-gray-400', isDark);
                text.classList.toggle('text-gray-600', !isDark);
            });

            const hero = document.getElementById('home');
            if (hero) {
                hero.classList.toggle('gradient-bg', !isDark);
                hero.classList.toggle('bg-gradient-to-r', isDark);
                hero.classList.toggle('from-purple-900', isDark);
                hero.classList.toggle('to-indigo-900', isDark);
            }
        });
    }
});
