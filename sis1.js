//Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
//[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
//Expected Output :
//60°C is 140 °F
//45°F is 7.222222222222222°C


// const readline = require('readline-sync');

// let fahrenheit = parseFloat(readline.question('Enter temperature in Fahrenheit: '));

// let celsius = (fahrenheit - 32) * 5/9;

// console.log(fahrenheit + "°F is " + celsius.toFixed(2) + "°C");

// const readline = require('readline-sync');

let celsius = parseFloat(readline.question('Enter temperature in Celsius: '));

let fahrenheit = (celsius * 9/5) + 32;

console.log(celsius + "°C is " + fahrenheit.toFixed(2) + "°F");
