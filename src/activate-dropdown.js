function Dropdown() {
  function click(dropdownWrapper) {
    const dropdownBtn = dropdownWrapper.querySelector('.dropdown-button');
    const dropdownMenu = dropdownWrapper.querySelector('.dropdown-menu');

    dropdownBtn.addEventListener('click', showDropdown);

    function showDropdown() {
      dropdownMenu.classList.toggle('dropdown-shown');
    }
  }

  function hover(dropdownWrapper) {
    const dropdownMenu = dropdownWrapper.querySelector('.dropdown-menu');
    let hideTimeout;

    dropdownWrapper.addEventListener('mouseenter', showDropdown);
    dropdownWrapper.addEventListener('mouseleave', setHideTimeout);

    function showDropdown() {
      dropdownMenu.classList.add('dropdown-shown');
      clearTimeout(hideTimeout); // Stops the timer if the mouse re-enters
    }

    // Hides the menu 500ms after the mouse has left the area
    function setHideTimeout() {
      hideTimeout = setTimeout(hideDropdown, 500);
    }

    function hideDropdown() {
      dropdownMenu.classList.remove('dropdown-shown');
    }
  }

  return { click, hover };
}

const activateDropdown = Dropdown();

export default activateDropdown;
