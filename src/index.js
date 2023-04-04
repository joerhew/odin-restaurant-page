import { loadWelcome } from './welcome';
import { loadMenu } from './menu';
import { loadContact } from './contact';
import './style.css';

const PAGE = document.querySelector('#page');
const CONTENT = document.querySelector('#content');
const TABS = document.createElement('div');

TABS.classList.add('tabs');
PAGE.insertBefore(TABS, CONTENT);

function createTab(content) {
  const newTab = document.createElement('div');
  newTab.classList.add('tab');
  newTab.id = content.toLowerCase();
  newTab.innerText = content;
  TABS.appendChild(newTab);
  newTab.addEventListener('click', () => selectTab(newTab.id));
  return newTab;
}

const TAB_WELCOME = createTab('Welcome');
const TAB_MENU = createTab('Menu');
const TAB_CONTACT = createTab('Contact');

function selectTab(tab) {
  let tabs = document.querySelectorAll('.tab')
  let activeTab = document.querySelector('#' + tab);

  tabs.forEach(tab => {
    tab.classList.remove('active');
  });
  
  activeTab.classList.add('active');
  CONTENT.innerHTML = '';
  switch (tab) {
    case 'welcome':
      loadWelcome();
      break;
    case 'menu':
      loadMenu();
      break;
    case 'contact':
      loadContact();
      break;
  }
}

selectTab('welcome');