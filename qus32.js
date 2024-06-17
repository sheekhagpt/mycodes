//Write a program to take two numbers from the user as input and obtain the HCF and LCM of the two numbers.
const readlineSync = require('readline-sync');

let number1 = readlineSync.questionInt('Enter the first number: ');
let number2 = readlineSync.questionInt('Enter the second number: ');

let a = number1;
let b = number2;

while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
}
let hcf = a;

let lcm = (number1 * number2) / hcf;

console.log(`The HCF of ${number1} and ${number2} is: ${hcf}`);
console.log(`The LCM of ${number1} and ${number2} is: ${lcm}`);
