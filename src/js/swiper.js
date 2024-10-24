const swiper = new Swiper('.swiper-r', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1200: { slidesPerView: 3, spaceBetween: 28 },
    768: { slidesPerView: 2, spaceBetween: 16 },
    320: { slidesPerView: 1 },
  },
});
