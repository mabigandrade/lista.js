const prompt = require('prompt-sync')();

let n1 = Number(prompt("Digite o primeiro valor numérico: "));
let n2 = Number(prompt("Digite o segundo valor numérico: "));

console.log("Adição dos dois valores: " + (n1 + n2));
console.log("Subtração dos dois números: " + (n1 - n2));
console.log("Multiplicação dos dois números: " + (n1 * n2));
console.log("Divisão dos dois números: " + (n1 / n2));
