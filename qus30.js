//Write a program to take 5 numbers from the user and print the frequency of every number

const readlineSync = require('readline-sync');

let numbers = [];

for (let i = 0; i < 5; i++) {
    let number = readlineSync.questionInt(`Enter number ${i + 1}: `);
    numbers.push(number);
}

let frequency = {};

for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    if (frequency[num]) {
        frequency[num]++;
    } else {
        frequency[num] = 1;
    }
}

console.log('Frequency of each number:');
for (let num in frequency) {
    console.log(`${num}: ${frequency[num]}`);
}
