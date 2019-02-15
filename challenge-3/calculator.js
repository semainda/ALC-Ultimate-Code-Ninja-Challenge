/**
 * Qn03: Calculator
 * 
 * Requirements:
 * The program should function as a basic calculator; it should ask the user to input
 * what type of arithmetic operation he would like, and then ask for the numbers on which the operation should
 * be performed. The calculator should then give the output of the operation.
 * 
 * Implementations:
 * 
 * Author: semaindas@gmail.com 
 */
const input = require('node-console-input');
// operators
const operators = {
    1: ' Addition(+)',
    2: ' Subtraction(-)',
    3: ' Multiplication(*)',
    4: ' Division(/)',
    5: ' Modulus(%)',
    6: ' Exponent(**)'
};
// A calculator function
let calculator = (operator, firstNumber, secondNumber) => {
    switch(operator){
        case 1:
            return `${firstNumber} + ${secondNumber} =  ${firstNumber + secondNumber}`;
        case 2:
            return `${firstNumber} - ${secondNumber} =  ${firstNumber - secondNumber}`;
        case 3:
            return `${firstNumber} * ${secondNumber} =  ${firstNumber * secondNumber}`;
        case 4:
            return `${firstNumber} / ${secondNumber} =  ${firstNumber / secondNumber}`;
        case 5:
            return `${firstNumber} % ${secondNumber} =  ${firstNumber % secondNumber}`;
        case 6:
            return `${firstNumber} ** ${secondNumber} =  ${firstNumber ** secondNumber}`;
    }
};

console.log('\nHello there!\nHere is our simple calculator, just follow the instruction to get started.');
console.log('\nPlease choose any arithmetic operator by adding its number to the prompt below');
console.log(`1:${operators[1]}\n2:${operators[2]}\n3:${operators[3]}\n4:${operators[4]}\n5:${operators[5]}\n6:${operators[6]}`);

// get operator number
let arithmeticOperator = parseInt(input.getConsoleInput(`\nWhat's your arithmetic operator?: `));
// validate received operator number
if (isNaN(arithmeticOperator) || operators[arithmeticOperator] === undefined){
    console.log(`OOPS! supplied input does not represent any valid arithmetic operator number.`);
}
else{
    let firstNumber = parseInt(input.getConsoleInput(`What's your first number?: `));
    let secondNumber = parseInt(input.getConsoleInput(`What's your second number?: `));
    let result = calculator(arithmeticOperator, firstNumber, secondNumber);
    console.log(result);
}
