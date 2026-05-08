// Exercício 54: Somatório e Média de Dez Valores
const prompt = require('prompt-sync')();
let somatorio = 0;
let contador = 0;
while (contador < 10) {
    let valor = Number(prompt("Digite um valor: "));
    somatorio += valor;
    contador++;
}
let media = somatorio / 10;
console.log(`O somatório dos dez valores é: ${somatorio}`);
console.log(`A média dos dez valores é: ${media}`);