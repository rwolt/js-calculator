function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    let solution = a * b;
    return solution;
    //need to code to truncate
}

function divide (a, b) {
    let quotient = a / b;
    return quotient;
    //need code to truncate
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
            if (num2 == 0) {
                return 'LoL'
            } else {
            return divide(num1, num2);
            }
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
        //If the user is stringing together operations and there is already a value in num1,
        //store the current value in num2, find the solution to the first operation, store it in num1 and display it
        if (num1) {
            num2 = +displayValue;
            displayValue = '';
            num1 = operate(num1, num2, operator);
            operator = button.id;
            screen.textContent = num1;
        } else {
        num1 = +displayValue;
        displayValue = '';
        operator = button.id;
        }
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
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    screen.textContent = displayValue;
});

let percentBtn = document.querySelector('#percent');
percentBtn.addEventListener('click', () => {
    displayValue = screen.textContent;
    displayValue = +displayValue / 100;
    screen.textContent = displayValue;
});

let negateBtn = document.querySelector('#negate');
negateBtn.addEventListener('click', () => {
    displayValue = +displayValue * -1;
    screen.textContent = displayValue;
});

//Disable the decimal button if there is already one on the display

let decimalBtn = document.querySelector('#decimal');

decimalBtn.addEventListener('click', () => {
    if (displayValue.includes('.') == false){
    displayValue += decimalBtn.textContent;
    screen.textContent = displayValue;
    }
});


