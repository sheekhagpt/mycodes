//Take a number N from the user as input, and print even numbers up to N.

const readlineSync = require('readline-sync');
let N = readlineSync.questionInt('Enter the N: ');

for(let i=2; i<=N; i+=2){
    console.log(i);
}