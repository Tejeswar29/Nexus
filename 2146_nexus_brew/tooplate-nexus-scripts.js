/*   JavaScript Document

Tooplate 2146 Nexus Brew

https://www.tooplate.com/view/2146-nexus-brew

*/

// Mobile menu toggle
function toggleMenu() {
   const menuToggle = document.querySelector('.menu-toggle');
   const navLinks = document.querySelector('.nav-links');

   if (menuToggle && navLinks) {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
   }
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
   link.addEventListener('click', () => {
      const menuToggle = document.querySelector('.menu-toggle');
      const navLinks = document.querySelector('.nav-links');

      if (menuToggle && navLinks) {
         menuToggle.classList.remove('active');
         navLinks.classList.remove('active');
      }
   });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);

      if (target) {
         target.scrollIntoView({
            behavior: 'smooth'
         });
      }
   });
});

// Active navigation link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
   let current = '';
   sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - 200) {
         current = section.getAttribute('id');
      }
   });

   navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
         link.classList.add('active');
      }
   });
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
   const scrolled = window.pageYOffset;
   const hero = document.querySelector('.hero-title');
   if (hero) {
      hero.style.transform = `translateY(${scrolled * 0.5}px)`;
   }
});

// Tab functionality
function showTab(tabName) {
   const tabs = document.querySelectorAll('.tab-content');
   const buttons = document.querySelectorAll('.tab-button');
   const clickedButton = event.target;

   tabs.forEach(tab => {
      tab.classList.remove('active');
   });

   buttons.forEach(button => {
      button.classList.remove('active');
   });

   const targetTab = document.getElementById(tabName);
   if (targetTab) {
      targetTab.classList.add('active');
   }

   if (clickedButton) {
      clickedButton.classList.add('active');
   }
}

// Add hover effect to menu items
document.querySelectorAll('.menu-list li').forEach(item => {
   item.addEventListener('mousemove', (e) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const link = item.querySelector('a');
      if (link) {
         link.style.background = `
                        linear-gradient(90deg, 
                        rgba(109, 63, 179, 0.1) 0%, 
                        rgba(109, 63, 179, 0.05) ${x / rect.width * 100}%, 
                        transparent 100%)
                    `;
      }
   });

   item.addEventListener('mouseleave', () => {
      const link = item.querySelector('a');
      if (link) {
         link.style.background = 'transparent';
      }
   });
});