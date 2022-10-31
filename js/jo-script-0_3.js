// Object to hold the data
const product = {
    title : 'Fall Limited Edition Sneakers',
    description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
    price: 250,
    discount: 0.5,
    image: ['image-product-1.jpg'],
    thumbnails: ['image-product-1-thumbnail.jpg', 'image-product-2-thumbnail.jpg', 'image-product-3-thumbnail.jpg', 'image-product-4-thumbnail.jpg']
}

// Set variables for the DOM elements
const titleText = document.getElementById('titletext');
const descriptionText = document.getElementById('description');
const priceText = document.getElementById('itemprice'); // Maybe set these as variables so I can change them
const numberOfItems = document.getElementById('itemresult'); // This one to
const discountProcentText = document.getElementById('discountprice');
const ordinaryPriceText = document.getElementById('oldprice');
const imageThumbnails = document.getElementById('thumbs'); // Maybe set this dynamic
const mainImage = document.getElementById('mainimage');

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

// Thumbnails
// Create a variables for the array in the object and display
let productThumbs = product.thumbnails;
let thumbURL = ``;
let idNumber = 0;

// Gets the data from the Array and print out the data in a for-loop for the thumbs
for (let i = 0; i < productThumbs.length; i++) {
    //Create a ID number for the div so I can target it
    idNumber = (i+1);
    //Prints out the div with the thumbnail
    thumbURL = `<div id="thumbnail-${idNumber}" onClick="thumbClick(${idNumber})" class="thumbimage"><img src="images/${productThumbs[i]}"></div>`;
    imageThumbnails.innerHTML += `${thumbURL}`;
}

// Main image function
// Set IdNummer to zero to inital set and load the first image.
idNumber = 0;
let displayMainImage = ``;

// Clicking on the thumb to display a new main image based in ID
const thumbClick = imageId => {
    idNumber = imageId;
    displayMainImage = `<img src="images/image-product-${idNumber}.jpg" onClick="sayHello()">`;
    mainImage.innerHTML = `${displayMainImage}`;
   
    // Starts function that checks if it is the active div
    thumbSlectedRemove(idNumber);
}

// Functions that add Selected on the clicked div
const thumbSlectedRemove = divId => {
    console.log("Startar funktionen");
    for (let i = 0; i < productThumbs.length; i++) {
        let idNumber = (i+1);
        const thumbSelected = document.getElementById("thumbnail-"+idNumber);
        if(idNumber == divId) {
            thumbSelected.classList.add("selected");
        } else {
            thumbSelected.classList.remove("selected");
        }
    }
}


// First time the page load it fires the thumbClick function with the first image
if (idNumber == 0) {
    thumbClick(1);
}

// Modal function
//This function can be used on the modal function
function sayHello () {
    console.log("hejsan");
}

// Bind the data and display it to the DOM when the JavaScript is loaded for the first time.
titleText.innerHTML = `${product.title}`;
descriptionText.innerHTML = `${product.description}`;
priceText.innerHTML = `$${addTotalPrice}.00`;
numberOfItems.innerHTML = `${itemNumber}`;

//NEXT : Want to add a class to the div when the div is selected.