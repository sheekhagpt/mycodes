//Write a program to take four numbers from the user and print the greater number of the four numbers. (assume all the numbers are distinct).


const readline = require('readline-sync');

let num1 = readline.questionInt('enter number: ');
let num2 = readline.questionInt('enter number: ');
let num3 = readline.questionInt('enter number: ');
let num4 = readline.questionInt('enter number: ');
if(num1>num2 && num1>num3 && num1>num4){
    max = num1;
}else if(num2>num1 && num2>num3 && num2>num4){
    max = num2;
}else if (num3>num1 && num3>num2 && num3>num4){
       max = num3;
}else{
    max = num4;
}
console.log(max);

     