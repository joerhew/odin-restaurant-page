import Restaurant from './restaurant.jpg';

export function loadWelcome() {
  const CONTENT = document.querySelector('#content');
  
  const BODY = document.createElement('div');
  CONTENT.appendChild(BODY);

  CONTENT.appendChild(BODY);
  
  const HEADER = document.createElement('h1');
  HEADER.innerText = 'The Most Amazingly Indifferent Hipster Restaurant You\'ll Ever Visit';
  BODY.appendChild(HEADER);

  const TEXT = document.createElement('p');
  TEXT.innerText = "Welcome to our restaurant. We're so cool we don't even need to try. We've stripped down our decor to the bare minimum and serve only the most basic dishes with a hipster twist. We don't care if you love or hate our food, because we know you'll come here just for the Instagram photos. Our dishes are made with locally sourced ingredients and served with the least amount of effort possible, just like our attitude towards customer service. But hey, we're not here to please you, we're here to be hip and aloof. So come in, order a dish that you can't even pronounce, and pretend like you know what you're talking about. We'll just be here, pretending to care, but not really."
  BODY.appendChild(TEXT);

  const CNTR_IMAGE = document.createElement('div');
  CNTR_IMAGE.classList.add('container_img');
  const IMAGE = new Image();
  IMAGE.src = Restaurant;
  BODY.appendChild(CNTR_IMAGE);
  CNTR_IMAGE.appendChild(IMAGE);
}