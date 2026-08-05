const header = document.getElementById('header');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const whatsappFloat = document.getElementById('whatsappFloat');

function onScroll() {
  const y = window.scrollY;
  header.classList.toggle('header--scrolled', y > 20);
  if (whatsappFloat) {
    whatsappFloat.classList.toggle('is-visible', y > 420);
  }
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  navToggle.classList.toggle('active', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

if (!prefersReducedMotion) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document
    .querySelectorAll(
      '.section__header, .pain-card, .service-card, .process-card, .use-case-card, .diff-card, .stack-card, .client-logo, .faq-item, .cta__inner'
    )
    .forEach((el) => {
      el.classList.add('fade-in');
      observer.observe(el);
    });
}

if (prefersReducedMotion && whatsappFloat) {
  whatsappFloat.classList.add('is-visible');
}
