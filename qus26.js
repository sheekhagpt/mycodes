//Write a program to take two integers M, and N and print the sum of numbers in the range M to N.

const readlineSync = require('readline-sync');
let M = readlineSync.questionInt('Enter the M: ');
let N = readlineSync.questionInt('Enter the N: ');

let sum = 0;
for(let i=M; i<=N; i++){
    sum+=i;
}
console.log(sum);