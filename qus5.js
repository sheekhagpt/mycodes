//write a program to take numbers A and B from the user and calculate the
 //quotient and remainder when number A is divided by number B.

const readline = require('readline-sync');

let num1 = readline.questionInt('enter num1');
let num2 = readline.questionInt('enter num2');

quotient = num1/num2;
remainder = num1%num2;
console.log(quotient,remainder);