const itemDetails = {
    "itemName": "HICKIES Originals",
    "itemRating": "1,293 Reviews",
    "discountedPrice": 14.99,
    "actualPrice": 19.99,
    "discountValue": "25% OFF",
    "colors": {
        "yellowgreen": {
            "display-name": "Yellowgreen",
            "price": 14.99
        },
        "red": {
            "display-name": "Red",
            "price": 20.99
        },
        "peru": {
            "display-name": "Peru",
            "price": 15.99
        },
        "white": {
            "display-name": "White",
            "price": 19.01
        },
        "seashell": {
            "display-name": "Seashell",
            "price": 18.99
        },
        "olive": {
            "display-name": "Olive",
            "price": 21.99
        },
        "black": {
            "display-name": "Black",
            "price": 14.99
        },
        "aqua": {
            "display-name": "Aqua",
            "price": 14.99
        },
        "gold": {
            "display-name": "Gold",
            "price": 22.99
        },
        "powderblue": {
            "display-name": "Powder-Blue",
            "price": 24.99
        },
        "whitesmoke": {
            "display-name": "White Smoke",
            "price": 12.01
        },
        "salmon": {
            "display-name": "Salmon",
            "price": 24.99
        },
        "darkorchid": {
            "display-name": "Darkorchid",
            "price": 29.99
        },
        "burlywood": {
            "display-name": "Burlywood",
            "price": 19.99
        },
        "hotpink": {
            "display-name": "Hotpink",
            "price": 14.99
        },
        "maroon": {
            "display-name": "Maroon",
            "price": 14.99
        },
        "slategray": {
            "display-name": "Slategray",
            "price": 49.99
        },
    }
};

function getItemDetails() {
    return itemDetails;
}

function initialisePrices(){
    let itemPrice = document.getElementById('discounted');
    let itemActualPrice = document.getElementById('no-discount');
    let itemDiscount = document.getElementById('discount');

    itemPrice.innerText = '$' + getPrice();
    itemActualPrice.innerText = '$' + getActPrice();
    itemDiscount.innerText = getDiscount();
    
    initialiseItemcolors()

}


function getPrice(){
    return itemDetails['discountedPrice']
}

function getActPrice(){
    return itemDetails['actualPrice']
}

function getDiscount(){
    return itemDetails['discountValue']
}

function reloadPage(){
    alert("See you on your next Shopping!");
    location.reload();
}
