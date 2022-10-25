// JSON - Get data from local .json-file
async function getProduct() {
    const requestURL = '/json/data.json';
    const request = new Request(requestURL);

    const response = await fetch(request);
    const productInfo = await response.json();

    //Create a new function that sends the array as a arg.
    productResult(productInfo);
    productPrices(productInfo);    
}

//Function to display the array data from .json file and construct the page information in the DOM
function productResult(obj) {
    const textTitle = document.getElementById('titletext');
    const textDescription = document.getElementById('description');
    
    const textContentTitle = obj.products[0].title;
    const textContentDescription = obj.products[0].description;

    textTitle.append(textContentTitle);
    textDescription.append(textContentDescription);
}

//Function that handles the price calculations
function productPrices(obj) {
    const textPrice = document.getElementById('itemprice');
    const textItemTotal = document.getElementById('itemresult');

    let itemNumber = 1;
    let itemPrice = obj.products[0].price;
    let itemDiscount = obj.products[0].discount;

    const discountPrice = discount => {
        if(itemDiscount > 0) {
            let newPrice = itemPrice*itemDiscount;
            textPrice.append(itemPrice);
            return newPrice;
        }
    }
    
    itemPrice = discountPrice(itemDiscount);
    let itemPriceTotal = itemPrice;

    const addRemove = btnType => {
        if (btnType == 'add') {
            itemNumber++;
            itemPriceTotal += itemPrice;
        } else if (btnType == 'remove' && itemNumber >= 2) {
            itemNumber--;
            itemPriceTotal -= itemPrice;
        }
        textPrice.append(itemPriceTotal);
        textItemTotal.append(itemNumber);
    }
}

getProduct();