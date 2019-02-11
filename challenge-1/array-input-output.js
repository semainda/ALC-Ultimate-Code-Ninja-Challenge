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

 //Create interface to read data
 const readline = require('readline').createInterface({
     input: process.stdin,
     output: process.stdout 
 });

 // Create chalk object for coloring text
 const chalk = require('chalk');

 readline.question(`\nWhat\'s your name: `, (name) => {
     readline.setPrompt(`\nHello ${name.toUpperCase().trim()}...,\nWhat would you like to add first in your shopping list today? (Q to exit): `);
     readline.prompt();
     readline.on('line', (item) => {
        // check if 'Q' supplied
        if (item.toLowerCase().trim() === `q`)
            readline.close();
        else {
            // add item to shopping list array
            shoppingList.push(item.toLowerCase().trim());
            readline.setPrompt(`\nWhat else would you like to add?: `);
            readline.prompt();
        }
     });
 });

 readline.on('close', () => {
    // check if shopping contains items
    if (shoppingList.length === 0)
        console.log(chalk.yellow(`\nOOPS! your shopping list is empty\n`));
    else
     console.log(chalk.green(`\nYour today's shopping list includes: ` + shoppingList.join() + `\n`));
 });
 