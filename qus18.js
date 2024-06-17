//Write a program to take the basic salary of an employee and calculate its Gross salary according to the following: (Gross salary is the sum of basic salary, HRA, and DRA)
//Basic Salary <= 10000 : HRA = 20%, DA = 80%
//Basic Salary <= 20000 : HRA = 25%, DA = 90%
//Basic Salary > 20000 : HRA = 30%, DA = 95%

const readline = require('readline-sync');
let basicSalary = readline.questionInt('enter the  basic salary: ')

let HRA, DA;

if(basicSalary <= 10000){
    HRA = basicSalary * 0.20;
    DA = basicSalary * 0.80;

}else if(basicSalary <= 20000){
    HRA = basicSalary * 0.25;
    DA = basicSalary * 0.90;
} else {
    HRA = basicSalary * 0.30;
    DA = basicSalary * 0.95;
}
  let grossSalary = basicSalary + HRA + DA;

 console.log( "Gross Salary:", grossSalary);