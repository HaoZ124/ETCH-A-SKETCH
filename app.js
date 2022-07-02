const container = document.querySelector('.container');

//Ask user to enter number of boxes on each side
const numOfBox = document.querySelector('#userInput').value;
//Add div to the container
function createBox(num, div) {
    var box = document.createElement('div');
    for (var i = 0; i < num; i++) {
        for (var j = 0; j < num; j++) {
            container.appendChild(box);
        }
    }
    div.style.gridTemplateColumns = 'repeat(num, 1fr)';
    div.style.gridTemplateRows = 'repeat(num, 1fr)';
}

createBox(numOfBox, container);
//Set hovering to the div