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
const priceText = document.getElementById('itemprice'); // Maybe set these as variables so I can change them
const numberOfItems = document.getElementById('itemresult'); // This one to
const discountProcentText = document.getElementById('discountprice');
const ordinaryPriceText = document.getElementById('oldprice');

// Hide the discount and ordinary price from the start
discountProcentText.style.display = "none";
ordinaryPriceText.style.display = "none";

// Calculate if the price has a discount or not and give it a new total price.
let totalPrice = product.price;
let discountTotal = product.discount*100;

if (product.discount > 0) {
    totalPrice = (totalPrice)-totalPrice*product.discount;
    // If the discount exist, show the element and print the total value in the DOM
    discountProcentText.style.display = "block";
    discountProcentText.innerHTML = `${discountTotal}%`;

    ordinaryPriceText.style.display = "block";
    ordinaryPriceText.innerHTML = `$${product.price}.00`;
}

// Calculate the number of how many items the customer by clicking on the buttons add and remove
// Printing out the number of times and the updated price based on number.
let addTotalPrice = totalPrice;
let itemNumber = 1;

const addRemove = btnType => {
    if (btnType == 'add') {
        itemNumber++
        addTotalPrice += totalPrice;
    } else if (btnType == 'remove' && itemNumber >= 2 ) {
        itemNumber--
        addTotalPrice -= totalPrice;
    }
    // Prints out the new value to the DOM
    priceText.innerHTML = `$${addTotalPrice}.00`;
    numberOfItems.innerHTML = `${itemNumber}`;
}

// Bind the data and display it to the DOM when the JavaScript is loaded for the first time.
titleText.innerHTML = `${product.title}`;
descriptionText.innerHTML = `${product.description}`;
priceText.innerHTML = `$${addTotalPrice}.00`;
numberOfItems.innerHTML = `${itemNumber}`;