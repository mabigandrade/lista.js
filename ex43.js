// Exercício 42: Quadrados na Faixa de Valores
const prompt = require('prompt-sync')();

let variavel = Number(prompt("Digite um valor numérico: "));
if (variavel >= 15 && variavel <= 200) {
    let quadrado = variavel ** 2;
    console.log(`O quadrado de ${variavel} é: ${quadrado}`);
} else {
    console.log("O valor digitado não está na faixa de 15 a 200.");
}