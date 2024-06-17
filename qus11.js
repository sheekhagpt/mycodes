//write a program to take a number from the and print that number as odd or even.

const readline = require('readline-sync');
let num = readline.questionInt('enter number: ');

if(num%2==0){
    num = "even"
}else{
    num = "odd"
}
console.log(num);