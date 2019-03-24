
// Кнопка все услуги с DropdownMenu
var dropDown = document.querySelector('.dropdown');
var submenu = document.querySelector('.submenu');
var iconDropdown = document.querySelector('.icon-dropdown');


dropDown.addEventListener('mouseenter', function () {   
  submenu.classList.add('submenu-active');
  iconDropdown.classList.add('icon-dropdown--rotate');
  dropDown.classList.add('dropdown--active');
});

dropDown.addEventListener('click', function () {   
  submenu.classList.toggle('submenu-active');
  iconDropdown.classList.toggle('icon-dropdown--rotate');
});

submenu.addEventListener('mouseenter', function () {   
  submenu.classList.add('submenu-active');
  iconDropdown.classList.add('icon-dropdown--rotate');
  dropDown.classList.add('dropdown--active');
});

submenu.addEventListener('mouseleave', function () {   
  submenu.classList.remove('submenu-active');
  iconDropdown.classList.remove('icon-dropdown--rotate');
  dropDown.classList.remove('dropdown--active');
});

dropDown.addEventListener('mouseleave', function () {   
  submenu.classList.remove('submenu-active');
  iconDropdown.classList.remove('icon-dropdown--rotate');
  dropDown.classList.remove('dropdown--active');
});

