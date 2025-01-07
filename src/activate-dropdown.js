function activateDropdown(dropdownWrapper) {
  const dropdownBtn = dropdownWrapper.querySelector('.dropdown-button');
  const dropdownMenu = dropdownWrapper.querySelector('.dropdown-menu');

  dropdownBtn.addEventListener('click', showDropdown);

  function showDropdown() {
    dropdownMenu.classList.toggle('dropdown-shown');
    dropdownMenu.classList.toggle('dropdown-hidden');
  }
}

export default activateDropdown;
