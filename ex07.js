const prompt = require('prompt-sync')();

let A = prompt("Digite o valor de A: ");
let B = prompt("Digite o valor de B: ");

console.log("Antes da troca - A = " + A + ", B = " + B);

let temp = A; 
A = B;        
B = temp;     

console.log("Após a troca - A = " + A + ", B = " + B);
