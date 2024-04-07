function searchCoffee(){
const searchBox = document.querySelector('#search-box');
const cardContainer = document.querySelector('#card-container');
}
searchBox.addEventListener('input', () => {
  const query = searchBox.value.toLowerCase();

  // Filter the coffee items based on the user's query
  const filteredItems = coffeeItems.filter((item) => item.name.toLowerCase().includes(query));

  // Clear the card container
  cardContainer.innerHTML = '';

  // Display the filtered coffee items
  if (filteredItems.length > 0) {
    filteredItems.forEach((item) => {
      const card = document.createElement('div');
      card.classList.add('sale__card');

      const saleTag = document.createElement('div');
      saleTag.classList.add('sale__tag');
      saleTag.textContent = 'sale';
      card.appendChild(saleTag);

      const img = document.createElement('img');
      img.src = item.image;
      img.alt = item.name;
      img.classList.add('sale__img');
      card.appendChild(img);

      const saleData = document.createElement('div');
      saleData.classList.add('sale__data');

      const saleTitle = document.createElement('h3');
      saleTitle.classList.add('sale__title');
      saleTitle.textContent = item.name;
      saleData.appendChild(saleTitle);

      const salePrice = document.createElement('span');
      salePrice.classList.add('sale__price');
      salePrice.textContent = item.price;
      saleData.appendChild(salePrice);

      card.appendChild(saleData);

      const saleButton = document.createElement('a');
      saleButton.classList.add('sale__button', 'button');
      saleButton.textContent = 'ORDER';
      card.appendChild(saleButton);

      cardContainer.appendChild(card);
    });
  } else {
    // Display a message when no coffee items are found
    const card = document.createElement('div');
    card.classList.add('sale__card');

    const saleTag = document.createElement('div');
    saleTag.classList.add('sale__tag');
    saleTag.textContent = 'not found';
    card.appendChild(saleTag);

    const saleData = document.createElement('div');
    saleData.classList.add('sale__data');

    const saleTitle = document.createElement('h3');
    saleTitle.classList.add('sale__title');
    saleTitle.textContent = 'Sorry, we don\'t have that coffee.';
    saleData.appendChild(saleTitle);

    card.appendChild(saleData);

    cardContainer.appendChild(card);
  }
});