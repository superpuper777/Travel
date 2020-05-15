(function () {
  const header = document.querySelector('.header');
  window.onscroll = () => {
    if (window.pageYOffset > 100) {
      header.classList.add('header_active');
    } else {
      header.classList.remove('header_active');
    }
  }
}());

//Burger Handler 

(function () {
  const burgerItem = document.querySelector('.burger');
  const menu = document.querySelector('.header__nav');
  const esc = document.querySelector('.header__nav-close');
  burgerItem.addEventListener('click', () => {
    menu.classList.add('header__nav_active');
  });
  esc.addEventListener('click', () => {
    menu.classList.remove('header__nav_active');
  });
}());