// Exercício 49: Potência de uma Base Elevada a um Expoente
const prompt = require('prompt-sync')();
let potencia = 1;
let base = Number(prompt("Digite a base: "));
let expoente = Number(prompt("Digite o expoente: "));

for (let i = 1; i <= expoente; i++) {
    potencia *= base;
}console.log(`${base} elevado a ${expoente} é: ${potencia}`);
