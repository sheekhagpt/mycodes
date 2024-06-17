//Write a program to take 4 numbers from the user and output the third max of these 4 numbers.

//repeat this statement 5 times
//initialize,condition, increment

const readlineSync = require('readline-sync')
let a = readlineSync.questionInt("enter the number: a ")
let b= readlineSync.questionInt("enter the number: b  ")
let c= readlineSync.questionInt("enter the number: c ")
let d= readlineSync.questionInt("enter the number: d ")
if(a>b){
  max=a;
  smax=b;
}else{
  max = b;
  smax = a;
}
if(max<c){
  tmax=smax;
  smax = max;
  max = c;
}else if(smax<c){
  tmax= smax;
  smax= c;
}else{
  tmax = c;
}
if(max<d){
  tmax= smax;
  smax = max;
  max=d;
}
 else if(smax<d){
  tmax= smax;
  smax = d;
 }else if(tmax<d){
  tmax=d;
 }
  console.log(tmax);




