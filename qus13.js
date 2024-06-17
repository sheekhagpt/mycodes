//write a program to take an integer as input and print the smallest positive integer that is a multiple of both 2 and navigator.

const readline = require('readline-sync');
let num = readline.questionInt('enter number: ');
let c;
if (num%2==0){
    c=num
}
else
{
    c=2*num
}
console.log(c);