//write a program to convert a temperature from celcius to fahrenheit using the formula c/5 = (f-32)/9.


const readline = require('readline-sync');

let celcius = readline.question('enter Fahrenheit');
Fahrenheit = celcius/5*9+32;
console.log(Fahrenheit);