const button1 = document.querySelector('.setNumber');
var color = '';
//Ask user to enter number of boxes on each side


//Add div to the container
function createBox(size) {
    var container = document.querySelector('.container');
    var square = container.querySelectorAll('div');
    square.forEach((div) => div.remove());
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (var i = 0; i < (size ** 2); i++) {
        var box = document.createElement('div');
        box.addEventListener('mouseenter', drawing(color));
        container.insertAdjacentElement('beforeend', box);
    };
}

function sizing(x) {
    if (x >= 2 && x <= 64) {
        createBox(x)
    } else {
        alert('Please try again!');
    }
}

function drawing(color) {
    this.style.backgroundColor = 'color';
}

//Set hovering to the div