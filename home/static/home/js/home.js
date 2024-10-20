setTimeout(function(){
  if ($('#djmsg').length > 0) {
       $('#djmsg').remove();
  }
}, 30000)    // 2000 millisecond

// Add this script to keep navbar transparent
window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  if (window.scrollY > 0) {
  navbar.classList.add('scrolled');
  } else {
  navbar.classList.remove('scrolled');
}
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();

const targetId = this.getAttribute('href');
const targetElement = document.querySelector(targetId);

targetElement.scrollIntoView({
behavior: 'smooth'
});
});
});

// Add this script to handle mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
const navbarToggle = document.getElementById('navbarToggle');
const mU = document.querySelector('.mU');

navbarToggle.addEventListener('click', function() {
mU.classList.toggle('show');
});
});

// Updated script for toggling the mobile dropdown and hiding desktop navbar
document.addEventListener('DOMContentLoaded', function() {
const navbarToggle = document.getElementById('navbarToggle');
const mobileDropdown = document.getElementById('mobileDropdown');
const navbarNav = document.getElementById('navbarNav');
const navbarSocial = document.querySelector('.navbar-social');

navbarToggle.addEventListener('click', function() {
mobileDropdown.classList.toggle('show');
if (mobileDropdown.classList.contains('show')) {
navbarNav.style.display = 'hide';
navbarSocial.style.display = 'hide';
} else {
navbarNav.style.display = '';
navbarSocial.style.display = '';
}
});

// Close the dropdown when clicking outside of it
window.addEventListener('click', function(event) {
if (!event.target.matches('.navbar-toggle') && !event.target.matches('.icon-bar')) {
if (mobileDropdown.classList.contains('show')) {
mobileDropdown.classList.remove('show');
navbarNav.style.display = '';
navbarSocial.style.display = '';
}
}
});

// Handle window resize
window.addEventListener('resize', function() {
if (window.innerWidth > 768) {
mobileDropdown.classList.remove('show');
navbarNav.style.display = '';
navbarSocial.style.display = '';
}
});
});