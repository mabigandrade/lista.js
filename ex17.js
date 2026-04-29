const prompt = require('prompt-sync')();

let salário = Number(prompt("Digite o salário do trabalhador: "));
let porcentagem = Number(prompt("Digite a porcentagem de aumento: "));

console.log("Aumento: " + salário * (porcentagem / 100));
console.log("Salário com aumento: " + (salário + (salário * (porcentagem / 100))));