// Mobile Menu Toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Service Tabs
const classicBtn = document.getElementById('classic-btn');
const premiumBtn = document.getElementById('premium-btn');
const classicServices = document.getElementById('classic-services');
const premiumServices = document.getElementById('premium-services');

classicBtn.addEventListener('click', function() {
    classicBtn.classList.add('bg-indigo-600', 'text-white');
    classicBtn.classList.remove('bg-white', 'text-indigo-600', 'border');
    premiumBtn.classList.add('bg-white', 'text-indigo-600', 'border');
    premiumBtn.classList.remove('bg-indigo-600', 'text-white');
    classicServices.classList.remove('hidden');
    premiumServices.classList.add('hidden');
});

premiumBtn.addEventListener('click', function() {
    premiumBtn.classList.add('bg-indigo-600', 'text-white');
    premiumBtn.classList.remove('bg-white', 'text-indigo-600', 'border');
    classicBtn.classList.add('bg-white', 'text-indigo-600', 'border');
    classicBtn.classList.remove('bg-indigo-600', 'text-white');
    premiumServices.classList.remove('hidden');
    classicServices.classList.add('hidden');
});

// Back to Top Button
window.addEventListener('scroll', function() {
    const backToTop = document.getElementById('back-to-top');
    if (window.pageYOffset > 300) {
        backToTop.style.display = 'flex';
    } else {
        backToTop.style.display = 'none';
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', function() {
    if (this.checked) {
        // Premium theme
        document.body.classList.remove('bg-gray-50', 'text-gray-800');
        document.body.classList.add('bg-gray-900', 'text-gray-100');
        
        // Update header
        const header = document.querySelector('header');
        header.classList.remove('bg-white', 'shadow-md');
        header.classList.add('bg-gray-800', 'shadow-lg');
        
        // Update nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('text-gray-800');
            link.classList.add('text-gray-300');
        });
        
        // Update logo
        const logo = document.querySelector('.text-gray-800');
        if (logo) logo.classList.remove('text-gray-800');
        if (logo) logo.classList.add('text-gray-300');
        
        // Update sections
        document.querySelectorAll('section').forEach(section => {
            if (section.id !== 'home') {
                section.classList.remove('bg-white', 'bg-gray-50');
                section.classList.add('bg-gray-800');
            }
        });
        
        // Update cards
        document.querySelectorAll('.service-card, .bg-gray-50').forEach(card => {
            card.classList.remove('bg-white', 'bg-gray-50');
            card.classList.add('bg-gray-700');
        });
        
        // Update text colors
        document.querySelectorAll('.text-gray-600').forEach(text => {
            text.classList.remove('text-gray-600');
            text.classList.add('text-gray-400');
        });
        
        // Update hero section
        const hero = document.getElementById('home');
        hero.classList.remove('gradient-bg');
        hero.classList.add('bg-gradient-to-r', 'from-purple-900', 'to-indigo-900');
        
    } else {
        // Classic theme
        document.body.classList.add('bg-gray-50', 'text-gray-800');
        document.body.classList.remove('bg-gray-900', 'text-gray-100');
        
        // Update header
        const header = document.querySelector('header');
        header.classList.add('bg-white', 'shadow-md');
        header.classList.remove('bg-gray-800', 'shadow-lg');
        
        // Update nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.add('text-gray-800');
            link.classList.remove('text-gray-300');
        });
        
        // Update logo
        const logo = document.querySelector('.text-gray-300');
        if (logo) logo.classList.remove('text-gray-300');
        if (logo) logo.classList.add('text-gray-800');
        
        // Update sections
        document.querySelectorAll('section').forEach(section => {
            if (section.id === 'services') {
                section.classList.add('bg-gray-50');
                section.classList.remove('bg-gray-800');
            } else if (section.id !== 'home') {
                section.classList.add('bg-white');
                section.classList.remove('bg-gray-800');
            }
        });
        
        // Update cards
        document.querySelectorAll('.service-card, .bg-gray-700').forEach(card => {
            card.classList.add('bg-white', 'bg-gray-50');
            card.classList.remove('bg-gray-700');
        });
        
        // Update text colors
        document.querySelectorAll('.text-gray-400').forEach(text => {
            text.classList.add('text-gray-600');
            text.classList.remove('text-gray-400');
        });
        
        // Update hero section
        const hero = document.getElementById('home');
        hero.classList.add('gradient-bg');
        hero.classList.remove('bg-gradient-to-r', 'from-purple-900', 'to-indigo-900');
    }
});