// JSON - Get data from local .json-file
async function getProduct() {
    const requestURL = '/json/data.json';
    const request = new Request(requestURL);

    const response = await fetch(request);
    const productInfo = await response.json();

    //Create a new function that sends the array as a arg.
    productResult(productInfo);
    
}

//Function to display the array data from .json file.
function productResult(obj) {
    const textTitle = document.getElementById('titletext');
    const textDescription = document.getElementById('description');
    
    const textContentTitle = obj.products[0].title;
    const textContentDescription = obj.products[0].description;

    textTitle.append(textContentTitle);
    textDescription.append(textContentDescription);
}

getProduct();

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

// Assign the new price width the discount.
itemPrice = discountPrice(itemDiscount);

/* const productInfo = [];

let textTitle = 'Title';
let textDescription = 'Description';

const productRequest = new Request('json/data.json');

fetch(productRequest)
  .then((response) => response.json())
  .then((data) => {
    for (const product of data.products) {
        textTitle = product.title;
        textDescription = product.description;
        console.log(data);
    }
  })
  .catch(console.error); */

  

// Json data ###################################################################
/* async function printJSON(url) {
    // Get the data from my .json file. See response.json for data
    const response = await fetch(url);
    const json = await response.json();
    // Print thre result to the browser
    document.getElementById("titletext").innerHTML = json.products[0].title;
    document.getElementById("description").innerHTML = json.products[0].description;
    return json;
}

printJSON("json/data.json");
// Hämtar ut Arrayen med data från printJSON
printJSON("json/data.json").then(result => productArr(result));

function productArr(resultArr) {
    let productInfo = resultArr;
    console.log(productInfo.products[0].title);
}

productArr(); */

//console.log(productArr());
// ###########################################################################

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