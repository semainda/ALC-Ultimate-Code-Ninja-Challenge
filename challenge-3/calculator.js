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
const operatorsObject = {
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
console.log(`1:${operatorsObject[1]}\n2:${operatorsObject[2]}\n3:${operatorsObject[3]}
4:${operatorsObject[4]}\n5:${operatorsObject[5]}\n6:${operatorsObject[6]}`);

// get operator number
let arithmeticOperator = input.getConsoleInput(`\nWhat's your arithmetic operator?: `);
let operatorNumber = parseInt(arithmeticOperator);
// validate received operator number
if (operatorsObject[operatorNumber] !== undefined){
    let firstNumber = parseInt(input.getConsoleInput(`What's your first number?: `));
    let secondNumber = parseInt(input.getConsoleInput(`What's your second number?: `));
    let result = calculator(operatorNumber, firstNumber, secondNumber);
    console.log(result);
}
else
    console.log(`OOPS! '${arithmeticOperator}' does not represent a valid arithmetic operator.Please supply a valid operator number.`);
