// Example JavaScript code for a blockchain-themed website

// Function to toggle the mobile navigation menu
function toggleNav() {
    var nav = document.getElementById("nav");
    nav.classList.toggle("show");
  }
  
  // Function to smooth scroll to a section on the page
  function smoothScroll(target) {
    var targetElement = document.getElementById(target);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth"
      });
    }
  }
  
  // Add event listeners for navigation menu and smooth scroll
  document.addEventListener("DOMContentLoaded", function() {
    var navToggle = document.getElementById("nav-toggle");
    var navLinks = document.getElementsByClassName("nav-link");
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener("click", function(event) {
        event.preventDefault();
        var target = event.target.getAttribute("href").substring(1);
        smoothScroll(target);
        toggleNav();
      });
    }
    navToggle.addEventListener("click", function() {
      toggleNav();
    });
  });
  