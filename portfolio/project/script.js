// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initial animations for hero section
    gsap.from('.hero-content', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.2 // Add slight delay to ensure animation is visible
    });

    // Staggered animation for social icons
    gsap.from('.social-icon', {
        opacity: 0,
        y: 20,
        duration: 0.4,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.5 // Delay after hero content
    });

    // Animate sections on scroll
    const sections = document.querySelectorAll('section:not(.hero)');
    sections.forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'top 20%',
                toggleActions: 'play none none reverse',
                markers: false // Set to true for debugging
            },
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: 'power2.out'
        });
    });

    // Animate cards within sections
    const cards = document.querySelectorAll('.skill-card, .project-card, .education-card');
    cards.forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                end: 'top 20%',
                toggleActions: 'play none none reverse',
                markers: false // Set to true for debugging
            },
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: 'power2.out'
        });
    });

    // Reset animations when back at top
    let isAtTop = true;
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const isNowAtTop = scrollTop < 50;

        if (isNowAtTop !== isAtTop) {
            isAtTop = isNowAtTop;
            if (isNowAtTop) {
                gsap.to('.hero-content', {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out'
                });
            }
        }
    });
});