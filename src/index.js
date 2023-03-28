const menu = {
    beverages: [
      {
        name: 'Honey Tea',
        description: 'A warm tea made with honey and lemon',
        price: '$3.50',
      },
      {
        name: 'Beary Tea',
        description: 'A cold tea infused with berry flavors',
        price: '$4.00',
      },
    ],
    sides: [
      {
        name: 'Toast and Jam',
        description: 'A slice of toast with homemade blackberry or raspberry jam',
        price: '$2.50',
      },
      {
        name: 'Fresh Fruit',
        description: 'A small bowl of fresh fruit',
        price: '$3.00',
      },
    ],
    mainDishes: [
      {
        name: 'Pancakes',
        description: 'A stack of homemade buttermilk pancakes served with locally sourced maple syrup',
        price: '$6.00',
      },
      {
        name: 'French Toast',
        description: 'Two slices of french toast served with locally sourced maple syrup',
        price: '$7.00',
      },
      {
        name: 'Beary Veggie Sandwich',
        description: 'A sandwich filled with fresh vegetables',
        price: '$8.50',
      },
      {
        name: 'BLT',
        description: 'A sandwich with bacon, lettuce, and tomato',
        price: '$9.00',
      },
      {
        name: 'Bagel and Lox',
        description: 'A bagel topped with sustainably harvested salmon',
        price: '$11.00',
      },
    ],
  };
  
  const contentDiv = document.getElementById('content');
  
  // create a menu section with a title and items
  function createMenuSection(title, items) {
    const section = document.createElement('section');
    const heading = document.createElement('h2');
    const list = document.createElement('ul');
  
    heading.textContent = title;
    section.appendChild(heading);
  
    items.forEach(item => {
      const listItem = document.createElement('li');
      const name = document.createElement('h3');
      const description = document.createElement('p');
      const price = document.createElement('span');
  
      name.textContent = item.name;
      description.textContent = item.description;
      price.textContent = item.price;
  
      listItem.appendChild(name);
      listItem.appendChild(description);
      listItem.appendChild(price);
      list.appendChild(listItem);
    });
  
    section.appendChild(list);
    return section;
  }
  
  // create menu sections for each category
  const beveragesSection = createMenuSection('Beverages', menu.beverages);
  const sidesSection = createMenuSection('Sides', menu.sides);
  const mainDishesSection = createMenuSection('Main Dishes', menu.mainDishes);
  
  // append the menu sections to the content div
  contentDiv.appendChild(beveragesSection);
  contentDiv.appendChild(sidesSection);
  contentDiv.appendChild(mainDishesSection);
  