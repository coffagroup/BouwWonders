/* ─────────── PRELOADER ─────────── */
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  const bus       = document.querySelector('.preloader-bus');

  /* Na 1 s zoomt de bus subtiel uit */
  setTimeout(() => {
    bus.style.transform = 'scale(1.15)';
  }, 1000);

  /* Na 2 s vervaagt & verdwijnt de preloader */
  setTimeout(() => {
    preloader.classList.add('preloader-hidden');
  }, 2000);
});

/* ─────────── BESTAANDE SCRIPT ─────────── */
document.addEventListener('DOMContentLoaded', () => {
  const navbar          = document.querySelector('.navbar');
  const galleryModal    = document.getElementById('galleryModal');
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

  /* Gallery modal */
  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
      galleryModalImg.src = img.src;
      new bootstrap.Modal(galleryModal).show();
    });
  });
});
