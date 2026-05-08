// Exercício 50: Sequência de Fibonacci
const prompt = require('prompt-sync')();
let termo1 = 0;
let termo2 = 1;
let proximoTermo;
let quantidadeTermos = Number(prompt("Digite a quantidade de termos da sequência de Fibonacci: "));

console.log("Sequência de Fibonacci:");
for (let i = 1; i <= quantidadeTermos; i++) {
    console.log(termo1);
    proximoTermo = termo1 + termo2;
    termo1 = termo2;
    termo2 = proximoTermo;
}