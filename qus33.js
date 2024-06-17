
//Write a program to take a number from the user and then determine if that number is a special type of number called a 'perfect number'.
 //A perfect number is a number where the sum of all its factors (excluding the number itself) is equal to the number itself. Print Yes if the number is a perfect number else print No.


const readlineSync = require('readline-sync');

let number = readlineSync.questionInt('Enter a number: ');

let sum = 0;

for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
        sum += i;
    }
}

if (sum === number) {
    console.log('Yes');
} else {
    console.log('No');
}
