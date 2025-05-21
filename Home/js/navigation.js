// Navigation JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenuToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
        });
    }
    
    // Handle dropdowns on mobile
    const dropdowns = document.querySelectorAll('.dropdown');
    
    if (window.innerWidth <= 768) {
        dropdowns.forEach(dropdown => {
            const dropdownLink = dropdown.querySelector('.nav-link');
            
            if (dropdownLink) {
                dropdownLink.addEventListener('click', function(e) {
                    // Only prevent default on mobile
                    if (window.innerWidth <= 768) {
                        e.preventDefault();
                        dropdown.classList.toggle('active');
                    }
                });
            }
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && 
            mainNav && 
            mainNav.classList.contains('active') && 
            !e.target.closest('.main-nav') && 
            !e.target.closest('.mobile-menu-toggle')) {
            
            mainNav.classList.remove('active');
            if (mobileMenuToggle) {
                mobileMenuToggle.classList.remove('active');
            }
        }
    });
    
    // Re-initialize navigation on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            if (mainNav) {
                mainNav.classList.remove('active');
            }
            if (mobileMenuToggle) {
                mobileMenuToggle.classList.remove('active');
            }
            
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});