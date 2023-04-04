import Restaurant from './restaurant.jpg';

export function loadContact() {
  const CONTENT = document.querySelector('#content');
  
  const BODY = document.createElement('div');
  CONTENT.appendChild(BODY);

  CONTENT.appendChild(BODY);
  
  const HEADER = document.createElement('h1');
  HEADER.innerText = 'Contact us if you want';
  BODY.appendChild(HEADER);

  const SUBHEADER_1 = document.createElement('h2');
  SUBHEADER_1.innerText = 'Small Plates & Appetizers'
  BODY.appendChild(SUBHEADER_1);


  const CNTR_IMAGE = document.createElement('div');
  CNTR_IMAGE.classList.add('container_img');
  const IMAGE = new Image();
  IMAGE.src = Restaurant;
  BODY.appendChild(CNTR_IMAGE);
  CNTR_IMAGE.appendChild(IMAGE);
}