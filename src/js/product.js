(() => {
  const refs = {
    openProductBtn: document.querySelector('[data-iceCream-open]'),
    closeProductBtn: document.querySelector('[data-iceCream-close]'),
    menu: document.querySelector('[data-iceCream]'),
  };

  refs.openProductBtn.addEventListener('click', toggleProduct);
  refs.closeProductBtn.addEventListener('click', toggleProduct);

  function toggleProduct() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
(() => {
  const refs = {
    openProductBtn: document.querySelector('[data-iceCoffee-open]'),
    closeProductBtn: document.querySelector('[data-iceCoffee-close]'),
    menu: document.querySelector('[data-iceCoffee]'),
  };

  refs.openProductBtn.addEventListener('click', toggleProduct);
  refs.closeProductBtn.addEventListener('click', toggleProduct);

  function toggleProduct() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
(() => {
  const refs = {
    openProductBtn: document.querySelector('[data-milkshakes-open]'),
    closeProductBtn: document.querySelector('[data-milkshakes-close]'),
    menu: document.querySelector('[data-milkshakes]'),
  };

  refs.openProductBtn.addEventListener('click', toggleProduct);
  refs.closeProductBtn.addEventListener('click', toggleProduct);

  function toggleProduct() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
// ! если вдруг ("is-hidden") не будет работать , то поробуйте сменить на ("is-open")