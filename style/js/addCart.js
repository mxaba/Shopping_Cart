function enableAddCart(){
    if(document.getElementById('change-color').innerText !== 'Select A color'){
        document.getElementById('add-to-cart').hidden = false;
        document.getElementById('btn-checkout').hidden = true;
    }
    else{
        document.getElementById('add-to-cart').hidden = true;
        document.getElementById('btn-checkout').hidden = false;
    }
}

function disableAddCart(){
    document.getElementById('add-to-cart').hidden = true;
    document.getElementById('btn-checkout').hidden = false;
    document.getElementById('change-color').innerText = 'Select A color';
}

function increment(){
    let quantity = document.getElementById("add-quantity").innerHTML;
    document.getElementById("add-quantity").innerHTML = ++quantity;
    document.getElementById("qnty-accept").disabled = false;


}

function decrement(){
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

