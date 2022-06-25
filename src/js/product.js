(() => {
  const refs = {
    openProductBtn: document.querySelector('[data-product-open]'),
    closeProductBtn: document.querySelector('[data-product-close]'),
    menu: document.querySelector('[data-product]'),
  };

  refs.openProductBtn.addEventListener('click', toggleProduct);
  refs.closeProductBtn.addEventListener('click', toggleProduct);

  function toggleProduct() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
// ! если вдруг ("is-hidden") не будет работать , то поробуйте сменить на ("is-open")