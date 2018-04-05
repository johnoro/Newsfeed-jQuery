const menu = $('.menu');
const button = $('.menu-button')

const toggleMenu = () => {
  menu.toggleClass('menu--open');

  //Stretch Goal #1. Animate the menu opening:

  // if(menu[0].style.left === '0px'){
  //   menu.animate({ left: -350 }, 500);
  // } else {
  //   menu.animate({left: 0}, 500);
  // }
}

button.click(toggleMenu);
