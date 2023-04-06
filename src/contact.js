import Restaurant from './restaurant.jpg';

export function loadContact() {
  const CONTENT = document.querySelector('#content');
  const HEADER = document.createElement('h1');
  HEADER.innerText = 'Contact us if you want';
  CONTENT.appendChild(HEADER);

  const CONTACT = document.createElement('p');
  CONTACT.classList.add('contact');
  CONTACT.innerText = `Email us at hip[at]resto[dot]com.`
  CONTENT.appendChild(CONTACT);
}