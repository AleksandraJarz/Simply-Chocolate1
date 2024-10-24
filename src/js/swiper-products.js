const swiper = new Swiper('.swiper-p', {
  slidesPerView: 4,
  pagination: {
    el: '.swiper-pagination-p',
    clickable: true,
  },
  breakpoints: {
    1200: { slidesPerView: 4 },
    768: { slidesPerView: 2.5 },
    320: { slidesPerView: 1 },
  },
});
