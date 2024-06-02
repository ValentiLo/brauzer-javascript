var makeElement = function (tagName, className, text) {
    var element = document.createElement(tagName);
    element.classList.add(className);
    if (text) {
      element.textContent = text;
    }
    return element;
  };
  
  var createCard = function (product) {
    var listItem = makeElement('li', 'product');
  
    var title = makeElement('h2', 'product__title', product.text);
    listItem.appendChild(title);
  
    var picture = makeElement('img', 'product__image');
    picture.src = product.imgUrl;
    picture.alt = product.text;
    listItem.appendChild(picture);
  
    var price = makeElement('p', 'product__price', product.price);
    listItem.appendChild(price);
  
    return listItem;
  };
  
  var cardList = document.querySelector('.products');
  
  var productInfo = {
    isAvailable: true,
    imgUrl: 'item-1.jpg',
    text: 'Селфи-палка для начинающих',
    price: 200,
    isSpecial: false,
    specialPrice: null
  };
  
  var cardItem = createCard(productInfo);
  cardList.appendChild(cardItem);