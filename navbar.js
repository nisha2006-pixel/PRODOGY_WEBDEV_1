document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = [];
  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section) sections.push(section);
  });

  // Scroll navbar style
  function onScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active link highlight
    let fromTop = window.scrollY + 70;
    navLinks.forEach(link => link.classList.remove('active'));
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
        navLinks[i].classList.add('active');
      }
    }
  }

  window.addEventListener('scroll', onScroll);

  // Hamburger toggle
  navToggle.addEventListener('click', function () {
    navMenu.classList.toggle('open');
    navToggle.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', navMenu.classList.contains('open'));
  });

  // Close menu on link click (mobile)
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Initial highlight for load
  onScroll();
});