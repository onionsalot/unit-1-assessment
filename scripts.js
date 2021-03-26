// Variables
let inputNumber, currentNumber;
// DOM ELEMENTS
const display = document.querySelector('.display');
const minusButton = document.querySelector('.minus');
const plusButton = document.querySelector('.plus');
const userInput = document.querySelector('.user_input');
// EVENT LISTENERS
minusButton.addEventListener('click', takeAway);
plusButton.addEventListener('click', addTo);





// FUNCTIONS
function initialize() {
    inputNumber = 1;
    currentNumber = 0;
    render()
}


function render() {
    if (currentNumber < 0) {
        display.style.color ='red';
    } else {
        display.style.color ='black';
    }
    display.innerHTML= currentNumber;
}

function takeAway() {
    console.log(`logging ${userInput.value}`)
    currentNumber -= userInput.value
    render();
}

function addTo() {
    console.log(`logging ${userInput.value}`)
    currentNumber += parseInt(userInput.value)
    render();
}


initialize()