document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar')
  const galleryModal = document.getElementById('galleryModal')
  const galleryModalImg = document.getElementById('galleryModalImg')

  function toggleNavbarBg () {
    if (window.innerWidth < 992) return;

    navbar.classList.toggle('scrolled', window.scrollY > 50)
  }
  toggleNavbarBg()
  window.addEventListener('scroll', toggleNavbarBg)

  new bootstrap.Carousel(document.getElementById('testimonialCarousel'), {
    interval: 6000,
    pause: 'hover'
  })

  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
      galleryModalImg.src = img.src
      new bootstrap.Modal(galleryModal).show()
    })
  })
})
