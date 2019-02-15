/**
 * Qn02: Guessing game
 * 
 * Requirements:
 * The program will act as a guessing game in which the user has eight tries to guess a randomly
 * generated number. The program will tell the user each time whether he guessed high or low.
 * 
 * Implementations:
 * Define the variable that will hold random generated number between 1 and 10 inclusively.
 * Create a function that will run recusively for all 8 tries while each time
 * checks for number of tries and a match to display appropriate message.
 * 
 * Author: semaindas@gmail.com 
 */

const input = require('node-console-input');

const chalk = require('chalk');

let randomGeneratedNumber = Math.floor(Math.random() * 10) + 1;

const guessingOrder = {1: 'first', 2: 'second', 3: 'third', 4: 'fourth', 5: 'fifth', 6: 'sixth', 7: 'seventh', 8: 'eighth'};

console.log('\nHello there!\nWelcome to our guessing game and following are detailed informations: ');
console.log('- Your given eight(8) tries to guess any number between 1 and 10.');
console.log('- Program will then tell whether you have guessed high, low or perfect.');
console.log('- Program will exit on the fact that you have exhausted all eight(8) tries or guessed perfect.');

let choice = input.getConsoleInput('\nAre you ready to give it a shot?(y or n): ');

if (choice.toLowerCase().trim() === 'y'){
    let trial = 1
    while (trial <= 8){
        let guessedNumber = parseInt(input.getConsoleInput(`\nWhat's your ${guessingOrder[trial]} guess?: `));
        if (guessedNumber === randomGeneratedNumber){
            console.log(chalk.green(`\nGot it! You guessed perfect.`));
            break;
        }
        else if (guessedNumber > randomGeneratedNumber){
            console.log(chalk.red(`You guessed high`));
        }
        else{
            console.log(chalk.red(`You guessed low`));
        }
        trial++;
    }
    // execute when all tries exhausted
    if (trial > 8){
        console.log(chalk.yellow(`\nSorry! you have exhausted ALL 8 tries with incorrect guesses.Try your luck next time.`));
        console.log(`Random Generated Number was: ${randomGeneratedNumber}\n`);
    }
    // execute when there is perfect guess
    else
        console.log(`THE GAME IS OVER!\n`);
}
else
    console.log(`THE GAME IS OVER!\n`);
