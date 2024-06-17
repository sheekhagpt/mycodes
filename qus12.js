//write a program to take a number from the user and output whether that number is negative ,positive or zero.

const readline = require('readline-sync');
let num = readline.questionInt('enter number: ');

if (num>0){
    num = "positive"
} else if(num<0){
    num = "zero"
}else{
    num = "negative"
}
console.log(num);