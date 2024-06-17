//Write a program to take a year from the user and output whether a given year is a leap year or not.

//Note: A year is said to be a leap year if it is either divisible by 400 or it should be divisible by 4 and not by 100.

const readline = require('readline-sync');
let year = readline.questionInt('enter number : ')

if((year%400==0 || year%4==0 && year%100!==0)){
     year = ("leapYear");
}
else{
    year = (" Not leapYear");
}
console.log(year);
