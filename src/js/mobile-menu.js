(() => {
  const body = document.querySelector('body');
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const menuItems = document.querySelectorAll('.js-menu-item');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    !isMenuOpen
      ? (body.style.overflow = 'hidden')
      : (body.style.overflow = 'visible');
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  //Close the mobile menu on wider screens if device orientation changes
  window.matchMedia('(min-width: 1200px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
  });

  // Add event listener to each menu item
  menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', toggleMenu);
  });
})();
