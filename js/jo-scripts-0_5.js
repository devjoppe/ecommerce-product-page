let itemNumber = 1;
let itemPrice = 250;
let itemDiscount = 0.5;

// Calculate the new price
const discountPrice = discount => {
    if (itemDiscount > 0) {
        let newPrice = itemPrice*itemDiscount;
        // Send the new price to its initial state
        document.getElementById("itemprice").innerHTML = newPrice;
        return newPrice;
    }
} 

itemPrice = discountPrice(itemDiscount);
console.log(itemPrice);

// Json data
async function printJSON() {
    // Get the data from my .json file. See response.json for data
    const response = await fetch("json/data.json");
    const json = await response.json();
    // Print thre result to the browser
    document.getElementById("titletext").innerHTML = json.products[0].title;
    document.getElementById("description").innerHTML = json.products[0].description;
}

printJSON();

// Function to add and remove items from Product bar. And calculate the price.
let itemPriceTotal = itemPrice;

const addRemove = btnType => {
    if (btnType == 'add') {
        itemNumber++;
        itemPriceTotal += itemPrice;
    } else if (btnType == 'remove' && itemNumber >= 2) {
        itemNumber--;
        itemPriceTotal -= itemPrice;
    }
    document.getElementById("itemresult").innerHTML = itemNumber;
    document.getElementById("itemprice").innerHTML = itemPriceTotal;
}