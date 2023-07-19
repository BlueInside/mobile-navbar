export default function renderLogoutPage() {
  const display = document.querySelector('.main-content');
  const h1 = document.createElement('h1');
  const para = document.createElement('p');
  const para2 = document.createElement('p');

  h1.innerText = "YOU'VE BEEN LOGGED OUT!";
  display.innerText = '';
  display.append(h1, para, para2);
}
