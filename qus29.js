//Write a program that takes a number from the user and prints the number that is formed by reversing the digits of the number.

const readlineSync = require('readline-sync');

let number = readlineSync.questionInt('Enter a number: ');

let reversedNumber = 0;

while (number > 0) {
    reversedNumber = reversedNumber * 10 + number % 10;
    number = parseInt(number / 10);
}

console.log(reversedNumber);
