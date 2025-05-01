/* ─────────── PRELOADER ─────────── */
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');

  /* wacht 2 s (de progress-bar animatie duurt net zo lang) */
  setTimeout(() => {
    preloader.classList.add('preloader-hidden');
  }, 2000);
});

/* ─────────── JE BESTAANDE SCRIPT ─────────── */
/* (niets aangepast – hieronder stond al jouw oorspronkelijke code) */
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const galleryModal   = document.getElementById('galleryModal');
  const galleryModalImg = document.getElementById('galleryModalImg');

  function toggleNavbarBg () {
    if (window.innerWidth < 992) return;
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }
  toggleNavbarBg();
  window.addEventListener('scroll', toggleNavbarBg);

  new bootstrap.Carousel(document.getElementById('testimonialCarousel'), {
    interval: 6000,
    pause: 'hover'
  });

  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
      galleryModalImg.src = img.src;
      new bootstrap.Modal(galleryModal).show();
    });
  });
});
