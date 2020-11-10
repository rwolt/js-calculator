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
        case 'add':
            return add(num1, num2);
            break;
        case 'subtract':
            return subtract(num1, num2);
            break;
        case 'multiply':
            return multiply(num1, num2);
            break;
        case 'divide':
            return multiply(num1, num2);
    }
}

let screen = document.querySelector('.calc-screen');
let displayValue = screen.textContent;
let operator;
let num1;
let num2;

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

let operators = document.querySelectorAll('.operator');
for (let button of operators) {
    button.addEventListener('click', () => {
        num1 = +displayValue;
        displayValue = '';
        operator = button.id;
    });
}

let equalBtn = document.querySelector('#equals');
equalBtn.addEventListener('click', () => {
    num2 = +displayValue;
    let solution = operate(num1, num2, operator);
    screen.textContent = solution;
});


let clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
    displayValue = '';
    screen.textContent = displayValue;
});

let percentBtn = document.querySelector('#percent');
percentBtn.addEventListener('click', () => {
    displayValue = +displayValue / 100;
    screen.textContent = displayValue;
});

