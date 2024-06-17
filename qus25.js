//Write a program to print the sum of odd numbers up to N.

const readlineSync = require('readline-sync');
let N = readlineSync.questionInt('Enter the N: ');
let sum = 0
for(let i=1; i<=N; i+=2){
    sum+= i
}
console.log(sum)