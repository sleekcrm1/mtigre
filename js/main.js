// Dark mode toggle
function toggleDarkMode() {
    document.getElementById('body').classList.toggle('dark');
    localStorage.setItem('darkMode', document.getElementById('body').classList.contains('dark'));
}

// Load dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.getElementById('body').classList.add('dark');
}

// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('mobileMenuOverlay');
    
    menu.classList.toggle('translate-x-full');
    overlay.classList.toggle('hidden');
}

// Close menu when clicking overlay
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('mobileMenuOverlay');
    if (overlay) {
        overlay.addEventListener('click', toggleMobileMenu);
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            // Close mobile menu if open
            if (!document.getElementById('mobileMenu').classList.contains('translate-x-full')) {
                toggleMobileMenu();
            }
        }
    });
});

// AOS initialization
document.addEventListener('DOMContentLoaded', function() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out-quad',
            once: false
        });
    }
    
    // Instagram embed reload
    if (window.instgrm) {
        window.instgrm.Embeds.process();
    }
});
