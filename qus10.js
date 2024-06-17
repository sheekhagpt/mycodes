//write a program to take two numbers from the user determine the greater of those two given numbers.

const readline = require('readline-sync');

let num1 = readline.questionInt('enter number: ');
let num2 = readline.questionInt('enter number: ');

if (num1>num2){
    greaterNum = num1;
}else {
    greaterNum = num2;
}
console.log(greaterNum);



