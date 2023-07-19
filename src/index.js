import './style/style.css';
import renderAccountPage from './account.js';
import renderHomePage from './home.js';
import renderSettingsPage from './settings.js';
import renderLogoutPage from './logout.js';

const navItems = document.querySelectorAll('.nav-item');
navItems.forEach((navItem) => {
  navItem.addEventListener('click', (e) => {
    const pageToRender = e.target.innerText;
    if (pageToRender === 'home') renderHomePage();
    if (pageToRender === 'account') renderAccountPage();
    if (pageToRender === 'settings') renderSettingsPage();
    if (pageToRender === 'logout') renderLogoutPage();
  });
});
