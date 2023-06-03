import './style.css';

'use strict';

(function () {
  let imgList = [];

  const body = document.querySelector('body');
  const container = document.createElement('div');
  container.classList.add('container');
    
  const nav = document.createElement('nav');
  nav.classList.add('nav-main');
    
  const tab1 = document.createElement('div');
  tab1.classList.add('tab-1');
  tab1.classList.add('tab');
  tab1.textContent = 'January Trip';

  tab1.addEventListener('click', (e) => {
    createTab(1);

  });
    
  const tab2 = document.createElement('div');
  tab2.classList.add('tab-2');
  tab2.classList.add('tab');
  tab2.textContent = 'April Trip';

  tab2.addEventListener('click', (e) => {
    createTab(2);

  })

  nav.appendChild(tab1);
  nav.appendChild(tab2);
    
  body.appendChild(nav);
  body.appendChild(container);

  const createTab = function(tab) {
    
    populateImgList(tab);
    populateTab();
  }

  const populateImgList = function(tab) {
    imgList.length = 0;

    let imgDir = `./imgs/trip_${tab}/`;

    for (let i = 1; i <= 28; i++) {
      let img = `${imgDir}img${i}.jpg`;
      imgList.push(img);
    }
  }

  const populateTab = function() {
    container.innerHTML = '';
    imgList.forEach(img => {
      let el = document.createElement('img');
      el.src = img;
      el.classList.add('pic');
      container.appendChild(el);
    });
  }

  createTab(1);
})();