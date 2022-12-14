// Object to hold the data
const product = {
    company: 'Sneaker Company',
    title: 'Fall Limited Edition Sneakers',
    description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
    price: 250,
    discount: 0.5,
    image: ['image-product-1.jpg'],
    thumbnails: ['image-product-1-thumbnail.jpg', 'image-product-2-thumbnail.jpg', 'image-product-3-thumbnail.jpg', 'image-product-4-thumbnail.jpg']
}

// Set variables for the DOM elements
// THis is crazy - I need to develop my skills to make this more effective
const titleText = document.getElementById('titletext');
const descriptionText = document.getElementById('description');
const priceText = document.getElementById('itemprice');
const numberOfItems = document.getElementById('itemresult');
const discountProcentText = document.getElementById('discountprice');
const ordinaryPriceText = document.getElementById('oldprice');
const imageThumbnails = document.querySelectorAll('.thumbnail--images');
const mainImage = document.querySelectorAll('.mainimage--image');
const productCompanyText = document.getElementById('productcompany');
const cartCheckout = document.getElementById("cartcheckout");
const cartItemsText = document.getElementById("cartitems");
const cartIcon = document.getElementById("cart");
const cartIconNumber = document.getElementById("cartnumber");

// Simple Mobile menu toggle
const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerClosed = document.querySelector('.menu-close');
const mainMenu = document.querySelector('.menu');
const mainMenuBg = document.querySelector('.mobile-modal');

hamburgerMenu.addEventListener('click', () => {
    menuToggle();
})

hamburgerClosed.addEventListener('click', () => {
    menuToggle();
})

const menuToggle = () => {
    mainMenu.classList.toggle('m-none-display');
    mainMenuBg.classList.toggle('m-none-display');
}

// Function that check what width the windows has. Updates on every resize.
let windowWidth = window.innerWidth;
window.onresize = displayWindowSize;

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
let loadView = 0;

// Variable for mobile view
let nextId = 0;

// Display thumbs on page or Modal (lightbox)
const pageModalView = (loadViewNumber, imageId) => {
    // Gets the data from the Array and print out the data in a for-loop for the thumbs
    for (let i = 0; i < productThumbs.length; i++) {
        //Create a ID number for the div so I can target it
        idNumber = (i+1);
        //Prints out the div with the thumbnail
        thumbURL = `<div id="thumbnail-${idNumber}" onClick="thumbClick(${idNumber}, ${loadViewNumber})" class="thumbimage"><img src="images/${productThumbs[i]}"></div>`;
        if(loadViewNumber == 0 ) {
            imageThumbnails[1].innerHTML = ``;
            imageThumbnails[0].innerHTML += `${thumbURL}`;
        } else if (loadViewNumber == 1) {
            imageThumbnails[0].innerHTML = ``;
            imageThumbnails[1].innerHTML += `${thumbURL}`;
            // When all the thumbs are loaded, start the main image function.
            if(idNumber >= productThumbs.length) {
                thumbClick(imageId, loadViewNumber);
            }
        } 
    }
}

// Init the Modal view
pageModalView(loadView)

// Set IdNummer to zero to inital set and load the first image.
idNumber = 0;
let displayMainImage = ``;

// Function to click the next icons in the modal view
const nextImage = (typeButton, checkView) => {
    if (typeButton == 'next') {    
        nextId++;
        if (nextId > 4) {
            nextId = 1;
        }
    } else if (typeButton == 'previous') {
        nextId--;
        if (nextId < 1) {
            nextId = 4;
        }
    }
    thumbClick(nextId, checkView); // This one I need to set to dynamic
}

// Functions that add Selected on clicked div
const thumbSlectedRemove = divId => {
    nextId = divId;
    for (let i = 0; i < productThumbs.length; i++) {
        idNumber = (i+1);
        let thumbSelected = document.getElementById("thumbnail-"+idNumber);
        if(idNumber == divId) {
            thumbSelected.classList.add("selected");
        } else {
            thumbSelected.classList.remove("selected");
        }
    }
}

// Main image function
// Clicking on the thumb to display a new main image based in ID, if it will show in the Modal or page view
function thumbClick(imageId, loadViewNumber) {
    
    idNumber = Number(imageId);
    if(loadViewNumber == 0) {
        displayMainImage = `<img class="image--main" src="images/image-product-${idNumber}.jpg" id="${idNumber}" onClick="displayModal(1, ${idNumber})">`;
        mainImage[loadViewNumber].innerHTML = `${displayMainImage}`;
    } else if (loadViewNumber == 3) {
        displayMainImage = `<img class="image--main" src="images/image-product-${idNumber}.jpg" id="${idNumber}">`;
        mainImage[0].innerHTML = `${displayMainImage}`;
    } else if (loadViewNumber == 1) {
        // When the modal is open. The main image is not clickable.
        displayMainImage = `<img class="image--main" src="images/image-product-${idNumber}.jpg">`;
        mainImage[loadViewNumber].innerHTML = `${displayMainImage}`;
    }
    // Starts function that checks if it is the active div
    thumbSlectedRemove(idNumber);
}

// Init the thumbimages with a selections
thumbClick(1, 0);

// Query the modal div
const showModal = document.querySelector('.modal--container');

// Calculate the browser width
function displayWindowSize () {

    const mainImageAttr = document.querySelector('.image--main');
    let imageAttr = Number(mainImageAttr.getAttribute('id'));

    windowWidth = window.innerWidth;

    let widthLoadView = 0;

    // Handles the main image and thumbs when is in mobile view
    if (windowWidth <= 480) {
        widthLoadView = 3;
        if (showModal.classList.contains("none-display")) {
            // Nothing happens
        } else {
            displayModal(3, imageAttr)
        }
    } else {
        widthLoadView = 0;
        // Bugfix: If dekstop view don´t have thumbnails and the modal is hidden, then show thumbs.
        if(!imageThumbnails[0].hasChildNodes() && showModal.classList.contains("none-display")) {
            pageModalView(0, imageAttr);
        }
    }

    thumbClick(imageAttr, widthLoadView)
}

// Start the DisplayWindow Function
displayWindowSize();

const stepsVisableMobile = document.querySelector('.mobile-view-steps');

// Cart functions
const displayCart = () => {
    // Displaying and hiding the cart
    cartCheckout.classList.toggle("none-display");
    // When mobile view - Hack
    stepsVisableMobile.classList.toggle("none-display");
}

// Updates the cart and displays the information, or remove items from the cart
let itemCartCheck = 0;
// Set and print out when the website starts
const displayInCart = `<span class="empty-cart">Your cart is empty.</span>`;
cartItemsText.innerHTML = displayInCart;

const addToCart = inCart => {
    itemCartCheck = inCart;
    if (itemCartCheck >= 1) {
        cartIconNumber.innerHTML = `<div class="cart-number">${itemNumber}</div>`;
        cartItemsText.innerHTML = `
        <div class="choosen-item">
             <div class="item-data">
                <div class="image"><img src="images/${product.thumbnails[0]}"></div>
                <div class="description">
                    <span class="description-title">${product.title}</span>
                    <span class="description-number">$${totalPrice}.00 x ${itemNumber} </span><span class="description-totalprice"> $${addTotalPrice}.00</span>
                </div>
                <div class="remove" onclick="addToCart(0)"><img src="images/icon-delete.svg"></div>
            </div>
            <button class="primary">Checkout</button>
        </div>
        `;
    } else {
        cartItemsText.innerHTML = displayInCart;
        cartIconNumber.innerHTML = ``;
    }
}

// First time the page load it fires the thumbClick function with the first image
if (idNumber == 0) {
    thumbClick(1);
}

//const closeModal = document.querySelector('.modal-images');
const closeModal = document.querySelector('.close-modal');

//This function can be used on the modal function, body > div.screen-width > div > main > div.left > div.modal--container > div > span
function displayModal (viewSelector, thumbId) {
    showModal.classList.toggle("none-display");
    closeModal.setAttribute('onClick', `displayModal(0, ${thumbId})`);
    
    // Show selected images and active thumb
    pageModalView(viewSelector, thumbId);
    thumbSlectedRemove(thumbId);
}

// Bind the data and display it to the DOM when the JavaScript is loaded for the first time.
productCompanyText.innerHTML = `${product.company}`;
titleText.innerHTML = `${product.title}`;
descriptionText.innerHTML = `${product.description}`;
priceText.innerHTML = `$${addTotalPrice}.00`;
numberOfItems.innerHTML = `${itemNumber}`;