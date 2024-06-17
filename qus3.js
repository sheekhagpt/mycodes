//write a program to take two value from the user and swap them.


const readline = require('readline-sync');

let num1= readline.questionInt("enetr num1");
let num2 = readline.questionInt('enetr num2');
let temp =  num1;
    num1 = num2;
    num2 = temp;

console.log("a:",num1);
console.log("b:",num2); 
