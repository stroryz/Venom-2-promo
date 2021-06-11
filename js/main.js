document.addEventListener('DOMContentLoaded', () => {

  const menuButtonElem = document.querySelector('.menu-button');
  const menuCloseElem = document.querySelector('.menu-close');
  const menuElem = document.querySelector('.nav-menu');

  menuButtonElem.addEventListener('click', () => {
    menuElem.classList.add('is-active');
    menuCloseElem.classList.add('is-active');
  })

  menuCloseElem.addEventListener('click', () => {
    menuElem.classList.remove('is-active');
    menuCloseElem.classList.remove('is-active');
  })

})
