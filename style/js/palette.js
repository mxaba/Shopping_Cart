const itemcolors = [
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

function initialiseItemcolors(){
    let tempJson = getItemDetails();
    for(let i=0;i<itemcolors.length;i++){
        document.getElementById('btn_' + i).style.backgroundColor = itemcolors[i];
        document.getElementById('btn_' + i ).id = tempJson.colors[itemcolors[i]]['display-name'];
    }
    document.getElementById(tempJson.colors[itemcolors[0]]['display-name']).focus();
    colorChanger(tempJson.colors[itemcolors[0]]['display-name']);

}

function getcolorPalette(){
    return itemcolors;
}

function colorChanger(value){
    console.log(value)
    document.getElementById('color-change').innerText = value;
    updatePrice(value);
    enableAddToCart();
}

function colorSelected(){
    document.getElementById('modal-color-selection').innerText = document.getElementById('color-change').innerText;
    document.getElementById('add-quantity').innerText = '0';
}


function updatePrice(value){
    document.getElementById('discounted').innerText = '$' + getItemDetails().colors[getcolorName(value)].price;
    document.getElementById('no-discount').innerText = '$' + calcDiscount(getItemDetails().colors[getcolorName(value)].price) +'.99';
}

function calcDiscount(disPrice){
    return Math.ceil(Number(disPrice) * 1.25);
}

$(document).ready(function(){
    $(".btn-circle").hover(function(){
        $(this).css("border", "#595959 2.5px solid");
        $(this).css("opacity","54%");
        $(this).css("filter"," brightness(65%)");
    }, function(){
        if($(this).is(":focus")){
            $(this).css("opacity", '100%');
            $(this).css("filter"," brightness(100%)");
            $(this).css("border","white 6px solid");
        }
        else{
            $(this).css("border", "none");
            $(this).css("opacity", '100%');
            $(this).css("filter"," brightness(100%)");
        }
    });

});

$(document).ready(function(){
    $(".btn-circle").focusout(function() {
        $(this).css("border", "none");
    });
});