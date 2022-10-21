let itemResult = 1;
let itemPrice = 259;

// Function to add and remove items from Product bar. And calculate the price.
const addRemove = btnType => {
    if (btnType == 'add') {
        itemResult++
        itemPrice += 259;
    } else if (btnType == 'remove' && itemResult >= 2) {
        itemResult--
        itemPrice -= 259;
    }
    document.getElementById("itemresult").innerHTML = itemResult;
    document.getElementById("itemprice").innerHTML = itemPrice;
    console.log(itemResult);
}