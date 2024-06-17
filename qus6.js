//Write a program to take a positive number from the user and then display the last digit of the number



 const readline = require('readline-sync');
 
 let num = readline.questionInt('enter a number: ');
 if(num > 0){
    lastDigit = num%10;
 }
 console.log(lastDigit);
