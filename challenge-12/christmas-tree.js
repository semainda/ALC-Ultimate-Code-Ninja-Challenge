/**
 * Qn12: Christmas Tree
 * 
 * Requirements:
 * Write code to print out a christmas tree(sample given).
 * Implementations:
 * 
 * Author: semaindas@gmail.com 
 */
// pick the color module
const chalk = require('chalk');

for (let row = 1; row <=5; row++){
    for (let col = 5; col > row; col--){
        process.stdout.write('   ');
    }
    for (let col = 1; col <= (2 *row) - 1; col++){
        process.stdout.write(chalk.green(' * '));
    }
    console.log();
    console.log();
}
