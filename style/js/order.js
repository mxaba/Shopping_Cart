let OrderTotal = 0;

function colorOrder(){
    color = "";
    quantity = 0;
    price = 0;
}

function colorOrder(color,quantity,price){
    this.color = color;
    this.quantity = quantity;
    this.price = price;
}

let orderDetails=[];

function itemExist(itemcolor){
    let Exists = false;
    for(let i=0;i<orderDetails.length;++i){
        let ordercolor = orderDetails[i].color;
        if(ordercolor == itemcolor){
            Exists = true;
        }
    }
    return Exists;
}

function getOrderObject(findcolor){
    for(let i=0;i<orderDetails.length;i++){
        if(findcolor === orderDetails[i].color){
            return orderDetails[i];
        }
    }
}

function addOrder() {

    let itemcolor = document.getElementById('change-color').innerText;
    let itemQuantity = parseInt(document.getElementById('add-quantity').innerText);
    let tempItemPrice = document.getElementById('discounted').innerText;
    let itemPrice = Number(tempItemPrice.slice(1, tempItemPrice.length));

    if (itemQuantity > 0) {
        if (itemExist(itemcolor)) {
            getOrderObject(itemcolor).quantity += parseInt(itemQuantity);
        } else {
            orderDetails.push(new colorOrder(itemcolor, itemQuantity, itemPrice));
        }
        setQuantity();
        populateOrderList();
        updateTotal(itemPrice,itemQuantity);
        disableAddCart();
    } else {
        console.log("No Item")
        disableAddCart();
    }
}

function populateOrderList(){

    clearOrderList();

    for(let i=0;i<orderDetails.length;i++){;
        createButton(getcolorName(orderDetails[i].color),orderDetails[i].quantity);
    }
}

function updateTotal(price,quantity){
    if(orderDetails.length==0){
        console.log("No Items In Order");
    }
    else{
        document.getElementById('total-price').innerText = '$'+ (OrderTotal += (price*quantity)).toFixed(2);
        document.getElementById('total-order').style.display = 'inline-block'; 
    }
}

function createButton(btncolor,btnQuantity){
    for(let i=0;i<btnQuantity;i++){
        let newDiv = document.createElement('div');
        newDiv.className = 'col-1 col-sm-1' ;

        let newBtn = document.createElement('button');
        newBtn.disabled = false;
        newBtn.id = getDisplayName(btncolor);
        newBtn.type = 'button';
        newBtn.setAttribute("onclick", "deleteBtn(this)");
        newBtn.className = 'btn btn-primary btn-circle btn-order';
        newBtn.style.backgroundColor = btncolor;
        newDiv.appendChild(newBtn);

        document.getElementById('dynamic-row').appendChild(newDiv);
    }
}

function clearOrderList(){
    let dynamicRow= document.getElementById("dynamic-row");
    while (dynamicRow.firstChild) {
        dynamicRow.removeChild(dynamicRow.firstChild);
    }
}

function setQuantity(){
    let counter = 0;
    for(let i=0;i<orderDetails.length;i++){
        counter += orderDetails[i].quantity;
    }

    document.getElementById('quantity').innerText = counter;
}

function getcolorName(toFind){
    let tempcolorList = getColorItem();
    let tempcolorPalette = getColorItem();
    for(let i=0;i<tempcolorPalette.length;i++){
        if(toFind === tempcolorList.colors[tempcolorPalette[i]]['display-name']){
            return tempcolorPalette[i]
        }
    }
}

function clearCartModal(){
    let dynamicRow= document.getElementById("dynamicCartModal");
    while (dynamicRow.firstChild) {
        dynamicRow.removeChild(dynamicRow.firstChild);
    }
}

function populateCheckoutModal(){
    clearCartModal();
    for(let i=0;i<orderDetails.length;i++){
        console.log(orderDetails[i].quantity);
        if(orderDetails[i].quantity > 0) {

            let rowDiv = document.createElement('div');
            rowDiv.className = 'row layout checkout-cart';
            let itemCol = document.createElement("div");
            itemCol.className = 'col-5 col-sm-5';

            let row = document.createElement("div");
            row.className = 'row';
            let colorItemOne = document.createElement("div");
            colorItemOne.className = 'col-2 col-sm-2';
            let btnItem = document.createElement('button');
            btnItem.className = 'btn btn-primary btn-circle btn-cart';
            btnItem.type = 'button';
            btnItem.disabled = true;
            btnItem.style.backgroundColor = getcolorName(orderDetails[i].color);
            colorItemOne.appendChild(btnItem);
            let colorItemTwo = document.createElement("div");
            colorItemTwo.className = 'col-8 col-sm-8';
            let itemcolor = document.createElement('h3');
            itemcolor.className = 'secondary cart-display';
            itemcolor.innerText = orderDetails[i].color;
            colorItemTwo.appendChild(itemcolor);

            let colorItemThree = document.createElement("div");
            colorItemThree.className = 'col-2 col-sm-2';

            row.appendChild(colorItemOne);
            row.appendChild(colorItemTwo);
            row.appendChild(colorItemThree);

            itemCol.appendChild(row);
            rowDiv.appendChild(itemCol);
            let itemPrice = document.createElement("div");
            itemPrice.className = 'col-2 col-sm-2';
            let price = document.createElement('h3');
            price.className = 'secondary cart-display';
            price.innerText = '$' + orderDetails[i].price;
            itemPrice.appendChild(price);
            rowDiv.appendChild(itemPrice);
            let whiteSpace = document.createElement("div");
            whiteSpace.className = 'col-1 col-sm-1';

            rowDiv.appendChild(whiteSpace);
            let itemQuantity = document.createElement("div");
            itemQuantity.className = 'col-1 col-sm-1';
            let number = document.createElement('h3');
            number.className = 'secondary cart-display';
            number.innerText = orderDetails[i].quantity;
            itemQuantity.appendChild(number);
            rowDiv.appendChild(itemQuantity);
            let itemTotal = document.createElement("div");
            itemTotal.className = 'col-3 col-sm-3';
            let total = document.createElement('h3');
            total.className = 'secondary cart-display';
            total.style.paddingTop = '2px';
            total.innerText = '$' + (orderDetails[i].quantity * orderDetails[i].price).toFixed(2);
            itemTotal.appendChild(total);
            rowDiv.appendChild(itemTotal);
            document.getElementById('dynamicCartModal').appendChild(rowDiv);
            let itemDivider = document.createElement("div");
            itemDivider.className = 'cartHR';
            document.getElementById('dynamicCartModal').appendChild(itemDivider);
            document.getElementById('cartTotal').innerText = document.getElementById('total-price').innerText;
        }
    }
}

function deleteBtn(value){
    console.log(value.id);
    let tempList = colorItem;

    let colorDel = value.id;
    for(let i=0;i<orderDetails.length;i++){
        if(orderDetails[i].color == colorDel){
            if(orderDetails[i].quantity > 0){
                orderDetails[i].quantity =  orderDetails[i].quantity -1;
                break;
            }
        }

    }

    populateOrderList();
    console.log(orderDetails);
    setQuantity();
    updateTotal((-1)*(tempList.colors[getcolorName(colorDel)]['price']),1);
    checkTotal();
}

function getDisplayName(colorCode){
    let tempList = colorItem;
    let DisplayName = tempList.colors[colorCode]['display-name'];
    return DisplayName;
}

function checkTotal(){
    let total = document.getElementById('total-price').innerText;

    if((total == '$-0.00') || (total == '$0.00')){
        document.getElementById('total-order').style.display = 'none';
    }
}