//Write a program to take two inputs from the user and swap them without using a temporary or third variable.


const readline = require('readline-sync');

let a = readline.questionInt('enter a');
let b = readline.questionInt('enter b');
a = a+b;
b = a-b;
a = a-b;
console.log(b,a);