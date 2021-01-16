const itemDetails = {
    "itemName": "HICKIES Originals",
    "itemRating": "1,293 Reviews",
    "discountedPrice": 14.99,
    "actualPrice": 19.99,
    "discountValue": "25% OFF",
    "colors": {
        "yellowgreen": {
            "display-name": "Yellowgreen",
            "price": 10.99
        },
        "red": {
            "display-name": "Red",
            "price": 22.99
        },
        "peru": {
            "display-name": "Peru",
            "price": 19.99
        },
        "white": {
            "display-name": "White",
            "price": 09.01
        },
        "seashell": {
            "display-name": "Seashell",
            "price": 15.99
        },
        "olive": {
            "display-name": "Olive",
            "price":21.99
        },
        "black": {
            "display-name": "Black",
            "price": 19.99
        },
        "aqua": {
            "display-name": "Aqua",
            "price": 18.99
        },
        "gold": {
            "display-name": "Gold",
            "price": 26.99
        },
        "powderblue": {
            "display-name": "Powder-Blue",
            "price": 30.99
        },
        "whitesmoke": {
            "display-name": "White Smoke",
            "price": 11.01
        },
        "salmon": {
            "display-name": "Salmon",
            "price": 14.99
        },
        "darkorchid": {
            "display-name": "Darkorchid",
            "price": 19.99
        },
        "burlywood": {
            "display-name": "Burlywood",
            "price": 27.99
        },
        "hotpink": {
            "display-name": "Hotpink",
            "price": 10.99
        },
        "maroon": {
            "display-name": "Maroon",
            "price": 14.99
        },
        "slategray": {
            "display-name": "Slategray",
            "price": 12.99
        },
    }
};

function getColorItem() {
    return colorItem;
}

function initialisePrices(){
    let itemPrice = document.getElementById('discounted');
    let itemrealPrice = document.getElementById('no-discount');
    let itemDiscount = document.getElementById('discount');

    itemPrice.innerText = '$' + getDiscountedPrice();
    itemrealPrice.innerText = '$' + getRealPrice();
    itemDiscount.innerText = getDiscountPecentage();
    
    initialiseColors()

}


function getDiscountedPrice(){
    return colorItem['discounted']
}

function getRealPrice(){
    return colorItem['realPrice']
}

function getDiscountPecentage(){
    return colorItem['discountPecentage']
}

function refresh(){
    alert("See you on your next Shopping!");
    location.reload();
}
