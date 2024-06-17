//Write a program to take 3 numbers from the user and output the second max of 3 numbers.
//(First, do it in the normal way then do it by using 3 comparisons)

const readline = require('readline-sync');
let num1 = readline.questionInt('Enter a number: ');
let num2 = readline.questionInt('Enter a number: ');
let num3 = readline.questionInt('Enter a number: ');

let max, smax;

if (num1 > num2) {
    max = num1;
    smax = num2;
} else {
    max = num2;
    smax = num1;
}
if (num3 > max) {
    smax = max;
    max = num3;
} else if (num3 > smax) {
    smax = num3;
}

console.log(smax);
