import './style.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Set initial state
gsap.set('.container', { opacity: 1 }); // Ensure container is visible initially

// Initial animations - now animating FROM invisible states
gsap.from('.header h1', {
  opacity: 0,
  duration: 1,
  y: 50,
  delay: 0.5,
  ease: 'power2.out'
});

gsap.from('.header p', {
  opacity: 0,
  duration: 1,
  y: 30,
  delay: 0.8,
  ease: 'power2.out'
});

// Animate contact form
gsap.from('.contact-form', {
  opacity: 0,
  duration: 1,
  y: 50,
  delay: 1,
  ease: 'power2.out'
});

// Animate info items
gsap.from('.info-item', {
  opacity: 0,
  duration: 0.8,
  y: 30,
  stagger: 0.2,
  delay: 1.5,
  ease: 'power2.out'
});

// Form submission handling
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Validate form
    if (!data.name || !data.email || !data.message) {
      showFeedback('Please fill in all fields', 'error');
      return;
    }

    if (!validateEmail(data.email)) {
      showFeedback('Please enter a valid email address', 'error');
      return;
    }

    // Animate button on submit
    gsap.to(e.target.querySelector('button'), {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1
    });

    try {
      // Here you would typically send the data to a server
      console.log('Form submitted:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      showFeedback('Message sent successfully!', 'success');
      contactForm.reset();
    } catch (error) {
      showFeedback('Failed to send message. Please try again.', 'error');
      console.error('Error:', error);
    }
  });
}

function showFeedback(message, type) {
  if (formFeedback) {
    formFeedback.textContent = message;
    formFeedback.className = `form-feedback ${type}`;
    
    // Hide feedback after 5 seconds
    setTimeout(() => {
      formFeedback.className = 'form-feedback';
      formFeedback.textContent = '';
    }, 5000);
  }
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      gsap.to(window, {
        duration: 1,
        scrollTo: target,
        ease: 'power2.inOut'
      });
    }
  });
});
document.getElementById('year').textContent = new Date().getFullYear();