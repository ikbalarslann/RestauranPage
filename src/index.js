const contentDiv = document.getElementById('content');
// create header element
const header = document.createElement('header');

// create heading element and add to header
const heading = document.createElement('h1');
heading.textContent = 'Restaurant Name';
header.appendChild(heading);

// create navigation element and add to header
const nav = document.createElement('nav');
const ul = document.createElement('ul');
const menuLink = document.createElement('a');
menuLink.href = '#';
menuLink.textContent = 'Menu';
const aboutLink = document.createElement('a');
aboutLink.href = '#';
aboutLink.textContent = 'About Us';
const contactLink = document.createElement('a');
contactLink.href = '#';
contactLink.textContent = 'Contact';
const menuListItem = document.createElement('li');
menuListItem.appendChild(menuLink);
const aboutListItem = document.createElement('li');
aboutListItem.appendChild(aboutLink);
const contactListItem = document.createElement('li');
contactListItem.appendChild(contactLink);
ul.appendChild(menuListItem);
ul.appendChild(aboutListItem);
ul.appendChild(contactListItem);
nav.appendChild(ul);
header.appendChild(nav);

// create main element
const main = document.createElement('main');

// create image element and add to main
const img = document.createElement('img');
img.src = 'https://example.com/images/restaurant.jpg';
img.alt = 'Restaurant Name';
main.appendChild(img);

// create heading and paragraph elements and add to main
const mainHeading = document.createElement('h2');
mainHeading.textContent = 'Welcome to Restaurant Name';
const mainParagraph = document.createElement('p');
mainParagraph.textContent = 'We offer the finest dining experience with a wide selection of delicious dishes to choose from. Our chefs use only the freshest ingredients to prepare our meals, and our friendly staff will ensure that you have a memorable dining experience.';
main.appendChild(mainHeading);
main.appendChild(mainParagraph);

// create footer element
const footer = document.createElement('footer');

// create paragraph element and add to footer
const footerParagraph = document.createElement('p');
footerParagraph.textContent = '\u00A9 2023 Restaurant Name';
footer.appendChild(footerParagraph);

// add header, main, and footer to body
contentDiv.appendChild(header);
contentDiv.appendChild(main);
contentDiv.appendChild(footer);
