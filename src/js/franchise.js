(() => {
  const refs = {
    openFranchiseBtn: document.querySelector('[data-franchise-open]'),
    closeFranchiseBtn: document.querySelector('[data-franchise-close]'),
    menu: document.querySelector('[data-franchise]'),
  };

  refs.openFranchiseBtn.addEventListener('click', toggleFranchise);
  refs.closeFranchiseBtn.addEventListener('click', toggleFranchise);

  function toggleFranchise() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
// ! если вдруг ("is-hidden") не будет работать , то поробуйте сменить на ("is-open")