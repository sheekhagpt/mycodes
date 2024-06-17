//write a program to take  two numbers from the user perform six basic operators(add,sub,multiply,division,integer division and modulus)
//on those two numbers.
//Note.print the output in the order as mentioned in the question.

const readline = require('readline-sync');

let a = readline.questionInt('enter a');
let b = readline.questionInt('enter b');
add = a+b;
sub = a-b;
mul = a*b;
div = a/b;
Idiv = a/b;
mod = a%b;
console.log(add,sub,mul,div,Idiv,mod);
console.log(sub);
console.log(mul);
console.log(div);
console.log(Idiv);
console.log(mod);



