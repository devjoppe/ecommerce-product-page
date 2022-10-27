// Object to hold the data
const product = {
    title : 'Fall Limited Edition Sneakers',
    description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
    price: 250,
    discount: 0.5,
    image: ['image-product-1.jpg'],
    thumbnails: ['image-product-1-thumbnail.jpg', 'image-product-2-thumbnail']
}

// Set variables for the DOM elements
const titleText = document.getElementById('titletext');
const descriptionText = document.getElementById('description');
const priceText = document.getElementById('itemprice') // Maybe set these as variables so I can change them
const numberOfItems = document.getElementById('itemresult') // This one to

// Calculate if the price has a discount or not and give it a new total price.
let totalPrice = product.price;

if (product.discount > 0) {
    totalPrice = totalPrice*product.discount;
    console.log(totalPrice);
}

// Calculate the number of how many items the customer by clicking on the buttons add and remove
let addTotalPrice = totalPrice;
let itemNumber = 1;

function addRemove (btnType) {
    if (btnType == 'add') {
        itemNumber++
        addTotalPrice += totalPrice;
    } else if (btnType == 'remove' && itemNumber >= 2 ) {
        itemNumber--
        addTotalPrice -= totalPrice;
    }
}

// Bind the data and display it to the DOM
titleText.append(product.title);
descriptionText.append(product.description);
priceText.append(totalPrice);
itemresult.append(itemNumber);