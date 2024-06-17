//Write a program to take 8 numbers from the user and output the second max of these 8 numbers.  (do this in 9 comparision)

const readlineSync = require('readline-sync');

// Function to get user input
const getNumber = (label) => readlineSync.questionInt(`Enter the number: ${label} `);

// Get 8 numbers from the user
let numbers = [];
for (let i = 0; i < 8; i++) {
  numbers.push(getNumber(String.fromCharCode(97 + i))); // 97 is the ASCII code for 'a'
}

// Function to find the maximum and second maximum using comparisons
const findSecondMax = (arr) => {
  let max1 = arr[0];
  let max2 = -Infinity;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max1) {
      max2 = max1;
      max1 = arr[i];
    } else if (arr[i] > max2) {
      max2 = arr[i];
    }
  }
  return max2;
}

// Using the function to find the second maximum
let secondMax = findSecondMax(numbers);
console.log("The second maximum number is:", secondMax);


