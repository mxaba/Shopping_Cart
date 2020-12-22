function removeFocus() {
    document.getElementById('add-to-cart').focusout()
}

function enableAddToCart(){
    if(document.getElementById('color-change').innerText !== 'Select A color'){
        document.getElementById('add-to-cart').hidden = false;
        document.getElementById('btn-checkout').hidden = true;
    }
    else{
        document.getElementById('add-to-cart').hidden = true;
        document.getElementById('btn-checkout').hidden = false;
    }
}

function disableAddToCart(){
    document.getElementById('add-to-cart').hidden = true;
    document.getElementById('btn-checkout').hidden = false;
    document.getElementById('color-change').innerText = 'Select A color';
}

function incrementQuantity(){
    let quantity = document.getElementById("add-quantity").innerHTML;
    document.getElementById("add-quantity").innerHTML = ++quantity;
    document.getElementById("qnty-accept").disabled = false;


}

function decrementQuantity(){
    let quantity = document.getElementById("add-quantity").innerHTML;
    if(quantity>0){
        document.getElementById("add-quantity").innerHTML = --quantity;
    }

    let updatedQuantity = document.getElementById("add-quantity").innerHTML;
    console.log(updatedQuantity);
    if(updatedQuantity==0){
        document.getElementById("qnty-accept").disabled = true;
    }

}

