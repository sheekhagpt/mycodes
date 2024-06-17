//Take the number N and the name from the user as inputs, and print the name N times.

const readlineSync = require('readline-sync');

let N = readlineSync.questionInt('Enter the number N: ');
let name = readlineSync.question('Enter the name: ');
for (let i = 1; i <= N; i++) {
    console.log(name);
}





