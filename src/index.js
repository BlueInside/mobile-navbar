import './style/style.css';

const navItems = document.querySelectorAll('.nav-item');
navItems.forEach((navItem) => {
  navItem.addEventListener('click', (e) => {
    console.log(e.target);
  });
});
