import Restaurant from './restaurant.jpg';

export function loadMenu() {
  class menuItem {
    constructor(name, category, description) {
      this.name = name;
      this.category = category;
      this.description = description;
    }
  }

  const menuItems = [
    new menuItem(
      'Avocado Toast',
      'Small Plates/Appetizers',
      "Toasted artisanal bread topped with mashed avocado, sea salt, and freshly ground black pepper. Served with a side of mixed greens and a poached egg."
    ),
    new menuItem(
      'Quinoa Bowl',
      'Salads/Bowls',
      "A nourishing bowl of red quinoa, roasted sweet potato, sautéed kale, and sliced avocado. Topped with a tangy tahini dressing and sprinkled with hemp seeds."
    ),
    new menuItem(
      'Acai Bowl',
      'Desserts/Drinks',
      "A refreshing blend of acai berries, banana, and almond milk topped with granola, fresh fruit, and a drizzle of honey."
    ),
    new menuItem(
      'Kale Caesar Salad',
      'Salads/Bowls',
      "Crispy kale leaves tossed in a creamy vegan Caesar dressing, topped with roasted chickpeas and shaved parmesan."
    ),
    new menuItem(
      'Sweet Potato Fries',
      'Small Plates/Appetizers',
      "Thick-cut sweet potato fries dusted with paprika and served with a side of garlic aioli."
    ),
    new menuItem(
      'Lentil Soup',
      'Entrees',
      "A hearty vegan soup made with red lentils, carrots, and celery. Served with a slice of crusty sourdough bread."
    ),
    new menuItem(
      'Matcha Latte',
      'Desserts/Drinks',
      "A frothy, creamy latte made with organic matcha powder and almond milk. Served hot or iced."
    ),
    new menuItem(
      'Veggie Burger',
      'Entrees',
      "A house-made vegan patty made with black beans, quinoa, and roasted vegetables. Served on a toasted brioche bun with avocado, lettuce, and tomato."
    ),
    new menuItem(
      'Charcuterie Board',
      'Small Plates/Appetizers',
      "A selection of artisanal cheeses, cured meats, olives, and crackers. Perfect for sharing with friends."
    ),
    new menuItem(
      'Chia Pudding',
      'Desserts/Drinks',
      "A creamy, vegan pudding made with chia seeds, coconut milk, and maple syrup. Topped with fresh fruit and toasted coconut flakes."
    ),
    new menuItem(
      'Kimchi Fried Rice',
      'Entrees',
      "A spicy and savory dish made with Korean-style fermented vegetables, brown rice, and topped with a fried egg."
    ),
    new menuItem(
      'Shakshuka',
      'Entrees',
      "A Middle Eastern dish of baked eggs in a flavorful tomato sauce, served with crusty bread for dipping."
    ),
    new menuItem(
      'Beet Hummus',
      'Small Plates/Appetizers',
      "A vibrant pink hummus made with roasted beets, tahini, and lemon juice. Served with pita chips and vegetables for dipping."
    ),
    new menuItem(
      'Turmeric Latte',
      'Desserts/Drinks',
      "A warm and comforting latte made with turmeric, ginger, cinnamon, and a touch of honey. Served hot or iced."
    ),
    new menuItem(
      'Cauliflower Wings',
      'Small Plates/Appetizers',
      "Crispy cauliflower florets coated in a spicy buffalo sauce, served with a side of vegan ranch."
      ),
    new menuItem(
    'Falafel Wrap',
    'Entrees',
    "A warm pita wrap filled with crispy falafel balls, hummus, and a medley of fresh vegetables. Served with a side of tahini sauce."
    ),
    new menuItem(
    'Poke Bowl',
    'Salads/Bowls',
    "A Hawaiian-inspired bowl filled with diced raw tuna, edamame, avocado, and pickled vegetables. Served over a bed of brown rice and drizzled with spicy mayo."
    ),
    new menuItem(
    'Coconut Curry',
    'Entrees',
    "A fragrant and creamy curry made with chickpeas, sweet potato, and spinach. Served with a side of steamed basmati rice."
    ),
    new menuItem(
    'Jackfruit Tacos',
    'Entrees',
    "A vegan twist on classic fish tacos. Tender jackfruit is seasoned and grilled to mimic the texture of fish, then topped with fresh cilantro, cabbage slaw, and spicy salsa."
    ),
    new menuItem(
    'Chocolate Avocado Mousse',
    'Desserts/Drinks',
    "A decadent and creamy dessert made with ripe avocados, cocoa powder, and a touch of maple syrup. Served with fresh berries and whipped coconut cream."
    )
  ];

  const CONTENT = document.querySelector('#content');
  
  const HEADER = document.createElement('h1');
  HEADER.innerText = 'This is our menu';
  CONTENT.appendChild(HEADER);

  function generateMenuCategories(array) {
    let allCategories = array.map(item => item.category);
    return [...new Set(allCategories)];
  }

  let uniqueCategories = generateMenuCategories(menuItems);

  for (let i = 0; i < uniqueCategories.length; i++) {
    let categoryName = document.createElement('h2');
    categoryName.innerText = uniqueCategories[i];
    categoryName.id = convertStringToID(uniqueCategories[i]);
    CONTENT.appendChild(categoryName);
  }

  function convertStringToID(string) {
    return string 
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '_');
  }

  for (let j = 0; j < menuItems.length; j++) {
    function insertAfter(newElement, referenceElement) {
      if (referenceElement.nextSibling) {
        referenceElement.parentNode.insertBefore(newElement, referenceElement.nextSibling);
      } else {
        referenceElement.parentNode.appendChild(newElement);
      }
    }
    
    let item = menuItems[j];
    
    let itemContainer = document.createElement('div');
    let nameContainer = document.createElement('div');
    let name = document.createElement('h3');
    let descContainer = document.createElement('div');
    let desc = document.createElement('p');

    let category = document.querySelector(`#${convertStringToID(item.category)}`);
    
    itemContainer.classList.add('menu-item');
    nameContainer.classList.add('menu-name');
    descContainer.classList.add('menu-description');

    name.innerText = item.name;
    desc.innerText = item.description;

    nameContainer.appendChild(name);
    descContainer.appendChild(desc);
    itemContainer.appendChild(nameContainer);
    itemContainer.appendChild(descContainer);
    insertAfter(itemContainer, category);
  }
}