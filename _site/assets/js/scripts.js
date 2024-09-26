// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal open for Projects button
$(document).ready(function(){
    $('#projectsModal').on('show.bs.modal', function (e) {
        console.log("Projects modal opened");
    });
});

// Add hover effect for profile photo
document.querySelector('.profile_photo').addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
    this.style.transition = 'transform 0.3s ease';
});
document.querySelector('.profile_photo').addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});

// Example of event listener for Projects button
document.querySelector('.btn-primary').addEventListener('click', function () {
    console.log("Projects button clicked!");
});

// Back to top button
let backToTopBtn = document.createElement('button');
backToTopBtn.textContent = "↑ Top";
backToTopBtn.classList.add('back-to-top');
document.body.appendChild(backToTopBtn);

backToTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Show/hide back to top button based on scroll position
window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});
