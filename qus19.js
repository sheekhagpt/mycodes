//Write a program  to input electricity unit charges and calculate the total electricity bill according to the given condition:
//For the first 50 units Rs. 0.50/unit
//For the next 100 units Rs. 0.75/unit
//For the next 100 units Rs. 1.20/unit
//For units above 250 Rs. 1.50/unit
//An additional surcharge of 20% is added to the bill

const readline = require('readline-sync');
let units = readline.questionInt('enter the units: ');

let bill 

if (units<=50) {
    bill = units*0.50
    surCharge = bill*0.2
    totalBill = bill+surCharge
    
}else if (units<=150){
    bill = 25+(units-50)*0.75
    surCharge = bill*0.2
    totalBill = bill+surCharge
}else if (units<=250){
    bill = 100+(units-150)*1.20
    surCharge = bill*0.2
    totalBill = bill+surCharge

}else{
    bill = 220+(units-250)*1.50
}
//console.log(totalBill);
console.log("Your total bill is: " + bill.toFixed(2));