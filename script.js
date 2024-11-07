// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Form Handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Add your form submission logic here
    console.log('Form submitted:', formData);
    // You can add AJAX call to your backend here
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar Animation
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
});

// Project Cards Animation
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('expanded');
    });
});

// Skills Animation
document.querySelectorAll('.skill-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// Dynamic Year
document.querySelector('.copyright-year').textContent = new Date().getFullYear();

// Theme Toggle (if you want to add dark/light mode)
function toggleTheme() {
    document.body.classList.toggle('light-theme');
}

// Loading Animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Typing Animation for Welcome Text
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing animation
const welcomeText = document.querySelector('.welcome-text');
if (welcomeText) {
    typeWriter(welcomeText, 'Welcome to My Portfolio');
}