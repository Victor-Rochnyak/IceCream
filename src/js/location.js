(() => {
  const refs = {
    openLocationBtn: document.querySelector('[data-location-open]'),
    closeLocationBtn: document.querySelector('[data-location-close]'),
    menu: document.querySelector('[data-location]'),
  };

  refs.openLocationBtn.addEventListener('click', toggleLocation);
  refs.closeLocationBtn.addEventListener('click', toggleLocation);

  function toggleLocation() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
// ! если вдруг ("is-hidden") не будет работать , то поробуйте сменить на ("is-open")
