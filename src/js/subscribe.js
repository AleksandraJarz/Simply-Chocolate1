(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-sub]'),
    closeModalBtn: document.querySelector('[data-modal-close-sub]'),
    modal: document.querySelector('[data-model-sub]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
