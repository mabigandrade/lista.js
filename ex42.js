const prompt = require('prompt-sync')();

let n1 = Number(prompt("Digite o primeiro valor numerico: "));

let multiplicação = n1 * 2;
console.log (`O resultado da multiplicação por 2 é: ${multiplicação}`);
if (multiplicação > 30) {
    console.log("O resultado é maior que trinta.");
}
else {
    console.log("O resultado não é maior que trinta.");
}