const itemDetails = {
    "itemName": "HICKIES Originals",
    "itemRating": "1,293 Reviews",
    "discountedPrice": 14.99,
    "actualPrice": 19.99,
    "discountValue": "25% OFF",
    "colors": {
        "indianred": {
            "display-name": "Indian Red",
            "price": 14.99
        },
        "blueviolet": {
            "display-name": "Blue Violet",
            "price": 20.99
        },
        "blue": {
            "display-name": "Blue",
            "price": 15.99
        },
        "white": {
            "display-name": "White",
            "price": 19.01
        },
        "yellow": {
            "display-name": "Yellow",
            "price": 18.99
        },
        "orange": {
            "display-name": "Orange",
            "price": 21.99
        },
        "brown": {
            "display-name": "Brown",
            "price": 14.99
        },
        "black": {
            "display-name": "Black",
            "price": 14.99
        },
        "purple": {
            "display-name": "Purple",
            "price": 22.99
        },
        "lightcoral": {
            "display-name": "Light Coral",
            "price": 24.99
        },
        "white": {
            "display-name": "White",
            "price": 12.01
        },
        "indigo": {
            "display-name": "Indigo",
            "price": 24.99
        },
        "silver": {
            "display-name": "Silver",
            "price": 29.99
        },
        "steelblue": {
            "display-name": "Steel Blue",
            "price": 19.99
        },
        "pink": {
            "display-name": "Pink",
            "price": 14.99
        },
        "sandybrown": {
            "display-name": "Sandy Brown",
            "price": 14.99
        },
        "gold": {
            "display-name": "Gold",
            "price": 49.99
        },
    }
};

function getItemDetails() {
    return itemDetails;
}

function initialisePage(){
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
