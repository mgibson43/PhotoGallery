import './style.css';

'use strict';

(function () {
  const body = document.querySelector('body');

  const container = document.createElement('div');
  container.classList.add('container');

  const nav = document.createElement('nav');
  nav.classList.add('nav-main');

  const tab1 = document.createElement('div');
  tab1.classList.add('tab-1');
  tab1.textContent = 'January Trip';

  const tab2 = document.createElement('div');
  tab1.classList.add('tab-2');
  tab2.textContent = 'April Trip';

  nav.appendChild(tab1);
  nav.appendChild(tab2);

  body.appendChild(nav);
  body.appendChild(container);
})();