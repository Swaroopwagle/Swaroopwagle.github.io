 
        const header = document.getElementById('mainHeader');
        const headerContent = document.getElementById('headerContent');

        // Function to update header style based on scroll position
        function updateHeaderStyle() {
            // You can adjust this value based on where your hero section ends
            // For example, if your hero section height is 600px, use 600
            const heroSectionHeight = 600; // Change this to match your hero section height

            if (window.scrollY > 100) { // Start transition after scrolling 100px
                // Scrolled past hero section - full width mode
                header.classList.remove('max-w-screen-md', 'md:top-6', 'md:rounded-3xl', 'lg:max-w-screen-lg');
                header.classList.add('max-w-full', 'md:top-0', 'md:rounded-none', 'lg:max-w-full');
                header.style.top = '0';
                header.style.borderRadius = '0';
                header.style.paddingTop = '0.75rem';
                header.style.paddingBottom = '0.75rem';
                header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
                headerContent.style.paddingLeft = '2rem';
                headerContent.style.paddingRight = '2rem';
            } else {
                // At the top (hero section) - original size mode
                header.classList.add('max-w-screen-md', 'md:top-6', 'md:rounded-3xl', 'lg:max-w-screen-lg');
                header.classList.remove('max-w-full', 'md:top-0', 'md:rounded-none', 'lg:max-w-full');
                header.style.top = '';
                header.style.borderRadius = '';
                header.style.paddingTop = '0.75rem';
                header.style.paddingBottom = '0.75rem';
                header.style.boxShadow = '';
                headerContent.style.paddingLeft = '1rem';
                headerContent.style.paddingRight = '1rem';
            }
        }

        // Listen for scroll events
        window.addEventListener('scroll', updateHeaderStyle);

        // Initial call to set correct state on page load
        updateHeaderStyle();
    


        const counters = document.querySelectorAll('.counter');

const animateCounter = (counter) => {
  const target = +counter.getAttribute('data-target');
  let count = 0;
  const duration = 1500;
  const increment = target / (duration / 16);

  const update = () => {
    count += increment;
    if (count < target) {
      counter.innerText = Math.floor(count);
      requestAnimationFrame(update);
    } else {
      counter.innerText = target;
    }
  };

  update();
};

// Trigger on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.6 });

counters.forEach(counter => observer.observe(counter));