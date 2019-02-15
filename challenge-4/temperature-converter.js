/**
 * Qn04: Temperature Converter - Celcius to Farenheit
 * 
 * Requirements:
 * In this challenge, write a program that takes in three arguments, a start temperature (in Celsius),
 * an end temperature (in Celsius) and a step size. Print out a table that goes from the start
 * temperature to the end temperature, in steps of the step size; you do not actually need to print
 * the final end temperature if the step size does not exactly match. You should perform input
 * validation: do not accept start temperatures less than a lower limit (which your code should
 * specify as a constant) or higher than an upper limit (which your code should also specify). You
 * should not allow a step size greater than the difference in temperatures.
 * 
 * Implementations:
 * 
 * Author: semaindas@gmail.com 
 */
const input = require('node-console-input');

// Defining temperature limits
const lowerTemperatureLimit = 0;
const upperTemperatureLimit = 100;
// accepting inputs
let userInitialTemperature = parseInt(input.getConsoleInput(`\nWhat's your initial temperature? `));
while (userInitialTemperature < lowerTemperatureLimit){
    console.log(`Initial temperature should not be less than ${lowerTemperatureLimit}`);
    userInitialTemperature = parseInt(input.getConsoleInput(`What's your initial temperature? `));
}
let userFinalTemperature = parseInt(input.getConsoleInput(`What's your final temperature? `));
while (userFinalTemperature > upperTemperatureLimit){
    console.log(`Final temperature should not exceed ${upperTemperatureLimit}`);
    userFinalTemperature = parseInt(input.getConsoleInput(`What's your final temperature? `));
}
let userTemperatureDifference = userFinalTemperature - userInitialTemperature;

let userStepSizeTemperature = parseInt(input.getConsoleInput(`What's your stepsize temperature? `));
while (userStepSizeTemperature > userTemperatureDifference){
    console.log(`Step size temperature should not exceed ${userTemperatureDifference}`);
    userStepSizeTemperature = parseInt(input.getConsoleInput(`What's your stepsize temperature? `));
}

let temperatureTable = [];
// convert celicius to farenheit
let temperatureConveter = (initTemp, finalTemp, stepSize) => {
    for (let celcius=initTemp; celcius <= finalTemp; celcius += stepSize){
        let farenheit = ((9/5) * celcius) + 32;
        let celciusFarenheit = {
            'Celcius': celcius,
            'Farenheit': farenheit
        };
        temperatureTable.push(celciusFarenheit);
    }
};

temperatureConveter(userInitialTemperature, userFinalTemperature, userStepSizeTemperature);
console.table(temperatureTable);
