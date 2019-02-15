/**
 * Qn01: Array Input/Output
 * 
 * Requirements:
 * When completed, the program should first fill in (by asking the user for input)
 * and then list all theelements in an array.
 * 
 * Implementations:
 * Program will start by asking a user to supply his/her name.
 * Program will then ask a user to input items for his/her shopping list
 * and store them in an array.
 * Program will display all shopping list items when 'Q' is supplied by a user.
 * 
 * Author: semaindas@gmail.com 
 */

 //Array to hold shoppinglist items
 let shoppingList = [];

 //console input module
 const input = require('node-console-input');

 // Create chalk object for coloring text
 const chalk = require('chalk');

let name = input.getConsoleInput(`\nWhat\'s your name? `)
console.log(`\nHello ${name.toUpperCase().trim()}...,`);
let item = input.getConsoleInput(`What would you like to add first in your shopping list today? (Q to exit): `);

while(item.toLowerCase().trim() !== `q`){
    // add item to shopping list array
    shoppingList.push(item.toLowerCase().trim());
    item = input.getConsoleInput(`\nWhat else would you like to add?: `);
}

// check if shopping contains items
if (shoppingList.length)
    console.log(chalk.green(`\nYour today's shopping list includes: ${shoppingList.join()}\n`));
else
    console.log(chalk.yellow(`\nOOPS! your shopping list is empty\n`));
