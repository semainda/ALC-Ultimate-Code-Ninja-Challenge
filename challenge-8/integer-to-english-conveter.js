/**
 * Qn08: Integer to English Conversion
 * 
 * Requirements:
 * Write a program that takes an integer and displays the English name of that value.
 * You should support both positive and negative numbers, in the range supported 
 * by a 32-bit integer approximately -2 billion to 2 billion).
 * 
 * Implementations:
 * 
 * Author: semaindas@gmail.com 
 */

 // converter module
const convert = require('number-to-words');

const input = require('node-console-input');

let anyInteger = parseInt(input.getConsoleInput(`\nWhat's your integer number? `));

if (isNaN(anyInteger))
    console.log('OOPS! supplied input should be integer number');
else
    console.log(`${anyInteger} => ${convert.toWords(anyInteger)}`);