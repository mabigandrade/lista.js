const prompt = require('prompt-sync')();

let n1 = Number(prompt("Digite o primeiro valor"));
let n2 = Number(prompt("Digite o segundo valor"));
let n3 = Number(prompt("Digite o terceiro valor"));

let ordemCrescente = [n1, n2, n3].sort((a, b) => a - b);

console.log(`Os números em ordem crescente são: ${ordemCrescente}`);