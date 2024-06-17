//Write a program to take a number from the user and print the sum of the digits of the given number.
const readlineSync = require('readline-sync');
let number = readlineSync.questionInt('Enter the number: ');

let sum = 0;

while (number > 0) {
    sum += number % 10;
    number = parseInt(number - number % 10) / 10;
}

console.log(sum);
