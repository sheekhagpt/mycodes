//write a program to take three numbers from the user and print the greater number of the three numbers (assume all three numbers are district).

const readline = require('readline-sync');

let num1 = readline.questionInt('enter number: ');
let num2 = readline.questionInt('enter number: ');
let num3 = readline.questionInt('enter number: ');

if (num1>num2 && num1>num3) {
    max = num1;
}else if (num2>num1 && num2>num3) {
    max = num2;
}else {
    max = num3;
}
console.log(max);

