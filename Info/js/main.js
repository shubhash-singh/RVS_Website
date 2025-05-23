

let lastScrollTop = 0;
let scrollTimeout;
const header = document.getElementById("header");

window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Hide navbar when scrolling down
    if (scrollTop > lastScrollTop) {
        header.style.top = "-100px"; // Adjust based on your header height
    } else {
        header.style.top = "0";
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

    // Clear previous timeout
    if (scrollTimeout) clearTimeout(scrollTimeout);

    // Show navbar if scrolling stops
    scrollTimeout = setTimeout(() => {
        header.style.top = "0";
    }, 150);
}, false);