document.addEventListener("DOMContentLoaded", function () {
    // GSAP Animations
    gsap.to('.hero', {
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out'
    });
  
    gsap.to('.project-card', {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
        delay: 0.5
    });
  
    document.querySelectorAll('.project-btn').forEach(button => {
        button.addEventListener('click', () => {
            const url = button.dataset.url;
            if (url) {
                gsap.to(button.closest('.project-card'), {
                    scale: 0.95,
                    duration: 0.2,
                    ease: 'power2.out',
                    onComplete: () => {
                        document.getElementById("preview-frame").src = url;
                    }
                });
            }
        });
    });
  });
  