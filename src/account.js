export default function renderAccountPage() {
  const display = document.querySelector('.main-content');
  const h1 = document.createElement('h1');
  const para = document.createElement('p');
  const para2 = document.createElement('p');

  h1.innerText = 'Welcome to the ACCOUNTS';
  para.innerText = 'This is example of ACCOUNTS PAGE';
  para2.innerText = 'Feel free to add your own content here.';

  display.innerText = '';
  display.append(h1, para, para2);
}
