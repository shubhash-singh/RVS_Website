// Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.getElementById('header');
    const scrollThreshold = 50;

    function handleScroll() {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
    
    // Initialize on page load
    handleScroll();

    // Smooth scroll for "Explore" link
    const exploreLink = document.querySelector('.explore-link');
    
    if (exploreLink) {
        exploreLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    }
});

//Image slider

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const slideInterval = 4000; 
    
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    // Start slideshow
    let slideShow = setInterval(nextSlide, slideInterval);
    
    // // Pause on hover (optional)
    // const hero = document.querySelector('.hero');
    // hero.addEventListener('mouseenter', () => {
    //     clearInterval(slideShow);
    // });
    
    // hero.addEventListener('mouseleave', () => {
    //     slideShow = setInterval(nextSlide, slideInterval);
    // });
});