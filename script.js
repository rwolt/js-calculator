function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function percent (a) {
    return a / 100;
}

function negative (a) {
    return a * -1;
}

function operate (num1, num2, operator) {
    switch(operator) {
        case add:
            return add(num1, num2);
            break;
        case subtract:
            return subtract(num1, num2);
            break;
        case multiply:
            return multiply(num1, num2);
            break;
        case divide:
            return multiply(num1, num2);
    }
}

let screen = document.querySelector('.calc-screen');
let displayValue = screen.textContent;

let numbers = document.querySelectorAll('.number');
for (let button of numbers) {
    button.addEventListener('click', () => {
        let digit = button.textContent;
        if (displayValue == '0') {
            displayValue = digit;
        } else {
        displayValue += digit;
        }
        screen.textContent = displayValue;
    });
}

let clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
    displayValue = '';
    screen.textContent = displayValue;
})