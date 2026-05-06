const prompt = require('prompt-sync')();

let n1 = Number(prompt("Digite o primeiro valor: "));
let n2 = Number(prompt("Digite o segundo valor: "));
let n3 = Number(prompt("Digite o terceiro valor: "));
let n4 = Number(prompt("Digite o quarto valor: "));
let n5 = Number(prompt("Digite o quinto valor: "));

console.log(`O maior valor é: ${Math.max(n1, n2, n3, n4, n5)}`);
console.log(`O menor valor é: ${Math.min(n1, n2, n3, n4, n5)}`);
