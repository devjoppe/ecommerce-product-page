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


const productRequest = new Request('json/data.json');
// Fetch and print Json-data ->
fetch(productRequest)
  .then((response) => response.json())
  .then((data) => {
    for (const product of data.products) {
      let textTitle = product.title;
      let textDescription = product.description;
      console.log(textTitle);
    }
  })
  .catch(console.error);

  console.log(textTitle);

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