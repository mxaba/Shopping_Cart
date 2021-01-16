const colors = [
    'yellowgreen',
    'red',
    'peru',
    'white',
    'seashell',
    'olive',
    'black',
    'aqua',
    'gold',
    'powderblue',
    'whitesmoke',
    'salmon',
    'darkorchid',
    'burlywood',
    'hotpink',
    'maroon',
    'slategray'
];

function updateItemPrice(value){
    document.getElementById('discounted').innerText = 'R' + getColorItem().colors[getcolorName(value)].price;
    document.getElementById('no-discount').innerText = 'R' + calculateDiscount(getColorItem().colors[getcolorName(value)].price) + '.99';
}

function initialiseColors(){
    let tempJson = getColorItem();
    for(let i=0; i < colors.length; i++){
        document.getElementById('btn_' + i).style.backgroundColor = colors[i];
        document.getElementById('btn_' + i).id = tempJson.colors[colors[i]]['display-name'];
    }
    document.getElementById(tempJson.colors[colors[0]]['display-name']).focus();
    colorItemChanger(tempJson.colors[colors[0]]['display-name']);

}

function colorItemSelected(){
    document.getElementById('modal-color').innerText = document.getElementById('change-color').innerText;
    document.getElementById('add-quantity').innerText = '0';
}

function getColorItem(){
    return colors;
}

function colorItemChanger(value){
    console.log(value)
    document.getElementById('change-color').innerText = value;
    updateItemPrice(value);
    enableAddCart();
}

function calculateDiscount(price){
    return Math.ceil(Number(price) * 1.25);
}

$(document).ready(function(){
    $(".btn-circle").hover(function(){
        $(this).css("border", "#595959 2.5px solid");
        $(this).css("opacity", "70%");
        $(this).css("filter"," brightness(55%)");
    }, function(){
        if($(this).is(":focus")){
            $(this).css("opacity", '100%');
            $(this).css("filter", "brightness(100%)");
            $(this).css("border", "white 6px solid");
        }
        else{
            $(this).css("border", "none");
            $(this).css("opacity", '100%');
            $(this).css("filter", "brightness(100%)");
        }
    });

});

$(document).ready(function(){
    $(".btn-circle").focusout(function() {
        $(this).css("border", "none");
    });
});