// Smooth Scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Interactive cursor effect
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
});

document.querySelectorAll('.cta-button, .work-card a, nav .nav-links a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        document.querySelector('.cursor').classList.add('hovered');
    });

    link.addEventListener('mouseleave', () => {
        document.querySelector('.cursor').classList.remove('hovered');
    });
});
