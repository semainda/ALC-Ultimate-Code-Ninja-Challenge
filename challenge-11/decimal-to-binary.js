/**
 * Qn11: Converting Decimal to Binary
 * 
 * Requirements:
 * Write a program that accepts a base ten (non-fractional) number at the command line
 * and outputs the binary representation of that number.
 * 
 * Implementations:
 * 
 * Author: semaindas@gmail.com 
 */
const input = require('node-console-input');
let binaryList = [];

let decimalNumber = parseInt(input.getConsoleInput(`\nWhat's your decimal(base-ten) number? `));
while(decimalNumber > 0){
    let quotient = Math.floor(decimalNumber/2);
    let remainder = decimalNumber%2;
    if (quotient){
        binaryList.push(remainder);
        decimalNumber = quotient;
    }
    else{
        binaryList.push(remainder);
        break;
    }
}
if (binaryList.length)
    console.log(`The decima-binary equivalent = ${binaryList.reverse().join('')}`);
else
    console.log('OOPS! supplied input is not a valid Decimal(base-ten) number.');
