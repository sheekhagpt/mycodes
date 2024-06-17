const readline = require('readline-sync');
let num1 = readline.questionInt('Enter a number: ');
let num2 = readline.questionInt('Enter a number: ');

if ((num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0)) {
    console.log('One number is positive and another is negative');
} else if ((num1 < 0 && num2 < 0) || (num1 > 0 && num2 > 0)) {
    console.log('Both numbers are positive or negative');
} else {
    console.log('One or both of the numbers are zero');
}
