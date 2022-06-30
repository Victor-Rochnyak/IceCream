(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-modal-open]'),
    closeMenuBtn: document.querySelector('[data-modal-close]'),
    menu: document.querySelector('[data-modal]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.menu.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openBuyBtn: document.querySelector('[data-buy-open]'),
    closeBuyBtn: document.querySelector('[data-buy-close]'),
    menu: document.querySelector('[data-buy]'),
  };

  refs.openBuyBtn.addEventListener('click', toggleBuy);
  refs.closeBuyBtn.addEventListener('click', toggleBuy);

  function toggleBuy() {
    document.body.classList.toggle('buy-open');
    refs.menu.classList.toggle('is-hidden');
  }
})();
