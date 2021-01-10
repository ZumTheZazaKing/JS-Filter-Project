let food = document.getElementsByClassName('food');

let items = document.getElementsByClassName('items');

function alls(){

    for(var i = 0; i < food.length;i++){

        food[i].classList.remove('hide');

    }

    for(var j = 0; j < items.length;j++){

        items[j].classList.remove('hide');

    }

}

function foods(){

    for(var i = 0; i < food.length;i++){

        food[i].classList.remove('hide');

    }

    for(var j = 0; j < items.length;j++){

        items[j].classList.add('hide');

    }

}

function itemss(){

    for(var i = 0; i < food.length;i++){

        food[i].classList.add('hide');

    }

    for(var j = 0; j < items.length;j++){

        items[j].classList.remove('hide');

    }

}