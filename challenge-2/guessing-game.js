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

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const chalk = require('chalk');

let randomGeneratedNumber = Math.floor(Math.random() * 10) + 1;

const guessingOrder = {1: 'first', 2: 'second', 3: 'third', 4: 'fourth', 5: 'fifth', 6: 'sixth', 7: 'seventh', 8: 'eighth'};
let guessPosition = 1;

const recursiveReadLine = () => {
    readline.question(`\nWhat's your ${guessingOrder[guessPosition]} guess?: `,(guessedNumber) => {
        guessPosition +=1;
        if (guessPosition <= 8){
            if (Number(guessedNumber) === randomGeneratedNumber){
                console.log(chalk.green(`\nGot it! You guessed perfect.`));
                return readline.close();
            }
            else if (Number(guessedNumber) > randomGeneratedNumber){
                console.log(`You guessed high`);
                return recursiveReadLine();
            }
            else{
                console.log(`You guessed low`);
                return recursiveReadLine();
            }
        }
        else
            return readline.close();
    });
}

console.log('Hello there!\nWelcome to our guessing game and following are detailed informations: ');
console.log('- Your given eight(8) tries to guess any number between 1 and 10.');
console.log('- Program will then tell whether you have guessed high, low or perfect.');
console.log('- Program will exit on the fact that you have exhausted all eight(8) tries or guessed perfect.');

readline.question('\nAre you ready to give it a shot?(y or n): ', (choice) => {
    if (choice.toLowerCase().trim() === 'y'){
        recursiveReadLine();
    }
    else{
        readline.close();
    }
});

readline.on('close', () => {
    if (guessPosition > 8){
        console.log(chalk.yellow(`\nSorry! you have exhausted ALL 8 tries with incorrect guesses.Try your luck next time.`));
        console.log(`Random Generated Number was: ${randomGeneratedNumber}`);
    }
    console.log(`THE GAME IS OVER!\n`);
});