import Restaurant from './restaurant.jpg';

export function loadWelcome() {
  const CONTENT = document.querySelector('#content');
  
  const HEADER = document.createElement('h1');
  const TEXT = document.createElement('p');
  const CNTR_IMAGE = document.createElement('div');
  const IMAGE = new Image();

  HEADER.innerText = 'The Restaurant';
  TEXT.innerText = "Welcome to our restaurant. We don't try too hard to please here. We've stripped down our decor to the bare minimum and serve only the most basic dishes with a twist sometimes. We don't really care if you love or hate our food, because we have enough loyal customers already. Our dishes are made with locally sourced ingredients and served with the least amount of effort possible, just like our attitude towards customer service. But hey, we're not here to please you, we're here to be hip and aloof. So come in, order a dish that you can't even pronounce, and pretend like you know what you're talking about. We'll just be here, pretending to care, but not really."
  
  CONTENT.appendChild(HEADER);
  CONTENT.appendChild(TEXT);
  
  CNTR_IMAGE.classList.add('container_img');
  IMAGE.src = Restaurant;
  CONTENT.appendChild(CNTR_IMAGE);
  CNTR_IMAGE.appendChild(IMAGE);
}