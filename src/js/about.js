(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-read-open]'),
    closeMenuBtn: document.querySelector('[data-read-close]'),
    menu: document.querySelector('[data-read]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.menu.classList.toggle('is-hidden');
  }
})();