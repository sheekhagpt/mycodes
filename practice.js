const readline = require('readline-sync');

// let birthDate = readline.questionInt('enter birthDate');
// console.log(birthDate);

// let birthDate = readline.questionInt('enter birthDate');
// let birthMonth = readline.question('enter birthMonth');
// let birthYear = readline.questionInt('enter birthYear');
// console.log(birthDate ,birthMonth, birthYear );
// // console.log(birthDate);
// // console.log(birthMonth);
// // console.log(birthYear);



// if else 
// maximum number

// let num1 = readline.questionInt('enter number: ');
// let num2 = readline.questionInt('enter number: ');
// let num3 = readline.questionInt('enter number: ');
// let maxNum = num1;
// if(num1 > maxNum){
//     maxNum = num1;
// }
// else if(num2 > maxNum){
//     maxNum = num2;
// }else{
//     maxNum = num3;
// }
// console.log(maxNum);

// let num1 = readline.questionInt('enter number: ');
// let num2 = readline.questionInt('enter number: ');
// let age = num2
// if( num2 > num1){
//     }if(num1 > age){
//         age = num2;
//     }else{
//         age = num2;
//     }
//         console.log(age);
   

let age = readline.questionInt('enter Age : ');
if(age >= 18){
    console.log("yes, you are eligible to drive");
}else{
    console.log("no, you are not eligible to drive");
}

