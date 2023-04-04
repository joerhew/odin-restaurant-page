import { loadWelcome } from './initial.js';
import './style.css';

const CONTENT = document.querySelector('#content');
  
const TABS = document.createElement('div');
TABS.classList.add('tabs');
CONTENT.appendChild(TABS);

function createTab(content) {
  const newTab = document.createElement('div');
  newTab.classList.add('tab');
  newTab.innerText = content;
  TABS.appendChild(newTab);
  return newTab;
}

const TAB_WELCOME = createTab('Welcome');
const TAB_MENU = createTab('Menu');
const TAB_CONTANCT = createTab('Contact');

loadWelcome();