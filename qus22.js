const readlineSync = require('readline-sync');

// Function to get user input
//const readline = (label) => readlineSync.questionInt(`Enter the number: ${label} `);

// Get 8 numbers from the user
let a = readlineSync.questionInt('Enter the a: ')
let b = readlineSync.questionInt('Enter the b: ')
let c = readlineSync.questionInt('Enter the c: ')
let d = readlineSync.questionInt('Enter the d: ')
let e = readlineSync.questionInt('Enter the e: ')
let f = readlineSync.questionInt('Enter the f: ')
let g = readlineSync.questionInt('Enter the g: ')
let h = readlineSync.questionInt('Enter the h:' )

// Step 1: Find the maximum and second maximum in pairs
let max1, smax1;
if (a > b) {
    max1 = a;
    smax1 = b;
} else {
    max1 = b;
    smax1 = a;
}

let max2, smax2;
if (c > d) {
    max2 = c;
    smax2 = d;
} else {
    max2 = d;
    smax2 = c;
}

let max3, smax3;
if (e > f) {
    max3 = e;
    smax3 = f;
} else {
    max3 = f;
    smax3 = e;
}

let max4, smax4;
if (g > h) {
    max4 = g;
    smax4 = h;
} else {
    max4 = h;
    smax4 = g;
}

// Step 2: Find the overall maximum and second maximum from the pairs
let maxSemi1, smaxSemi1;
if (max1 > max2) {
    maxSemi1 = max1;
    smaxSemi1 = Math.max(smax1, max2);
} else {
    maxSemi1 = max2;
    smaxSemi1 = Math.max(smax2, max1);
}

let maxSemi2, smaxSemi2;
if (max3 > max4) {
    maxSemi2 = max3;
    smaxSemi2 = Math.max(smax3, max4);
} else {
    maxSemi2 = max4;
    smaxSemi2 = Math.max(smax4, max3);
}

// Step 3: Find the overall second maximum
let finalMax, finalSmax;
if (maxSemi1 > maxSemi2) {
    finalMax = maxSemi1;
    finalSmax = Math.max(smaxSemi1, maxSemi2);
} else {
    finalMax = maxSemi2;
    finalSmax = Math.max(smaxSemi2, maxSemi1);
}
console.log( finalSmax);
