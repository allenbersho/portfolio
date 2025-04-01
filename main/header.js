gsap.registerPlugin(TextPlugin);

const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// Create enhanced loader element
const loader = document.createElement('div');
loader.className = 'loader';
document.body.appendChild(loader);

const loaderContent = document.createElement('div');
loaderContent.className = 'loader-content';
loader.appendChild(loaderContent);

const loaderSpinner = document.createElement('div');
loaderSpinner.className = 'loader-spinner';
loaderContent.appendChild(loaderSpinner);

const loaderText = document.createElement('div');
loaderText.className = 'loader-text';
loaderText.textContent = 'Loading content...';
loaderContent.appendChild(loaderText);

const loaderProgress = document.createElement('div');
loaderProgress.className = 'loader-progress';
loaderContent.appendChild(loaderProgress);

const loaderProgressBar = document.createElement('div');
loaderProgressBar.className = 'loader-progress-bar';
loaderProgress.appendChild(loaderProgressBar);

// Nav hide/show on scroll
{
  const nav = document.querySelector("header .nav-bar");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY - 5) {
      nav.classList.add("nav-hidden");
    } else if (lastScrollY > window.scrollY + 5) {
      nav.classList.remove("nav-hidden");
    }
    lastScrollY = window.scrollY;
  });
}

// Smooth navigation with enhanced loader
document.querySelectorAll('header .nav-bar .links a').forEach(link => {
  if (link.href && !link.href.startsWith('#')) {
    link.addEventListener('click', (e) => {
      // Don't intercept if it's an external link or target blank
      if (link.target === '_blank' || !link.href.includes(window.location.hostname)) {
        return;
      }
      
      e.preventDefault();
      const destination = link.href;
      
      // Update loader text based on which link was clicked
      const linkText = link.textContent.trim();
      loaderText.textContent = `Loading ${linkText}...`;
      loaderProgressBar.style.width = '0%';
      loader.classList.add('active');
      
      // Animate out
      gsap.to('main', {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in'
      });
      
      // Simulate progress (in case the page takes too long)
      const progressInterval = setInterval(() => {
        const currentWidth = parseInt(loaderProgressBar.style.width) || 0;
        const newWidth = Math.min(currentWidth + 5, 90); // Cap at 90%
        loaderProgressBar.style.width = `${newWidth}%`;
      }, 300);
      
      // Timeout after 8 seconds
      const timeout = setTimeout(() => {
        clearInterval(progressInterval);
        loaderText.textContent = 'Taking longer than expected...';
        loaderProgressBar.style.width = '100%';
      }, 8000);
      
      // Create a hidden iframe to preload the content
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = destination;
      document.body.appendChild(iframe);
      
      iframe.onload = () => {
        clearInterval(progressInterval);
        clearTimeout(timeout);
        loaderProgressBar.style.width = '100%';
        loaderText.textContent = 'Almost there...';
        
        // Give a moment to show completion before redirecting
        setTimeout(() => {
          window.location.href = destination;
        }, 300);
      };
      
      iframe.onerror = () => {
        clearInterval(progressInterval);
        clearTimeout(timeout);
        loaderText.textContent = 'Failed to load page. Please try again.';
        loaderProgressBar.style.width = '100%';
        loaderProgressBar.style.background = '#ff6b6b';
        
        // Allow user to dismiss the loader after error
        setTimeout(() => {
          loader.classList.remove('active');
          gsap.to('main', {
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        }, 2000);
        
        document.body.removeChild(iframe);
      };
    });
  }
});

// Show loader when page is loading
window.addEventListener('beforeunload', () => {
  loader.classList.add('active');
});