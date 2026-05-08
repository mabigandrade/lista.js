// Exercício 55: Somatório, Média e Total de Valores Lidos
const prompt = require('prompt-sync')();
let somatorio = 0;
let totalValores = 0;
let media = 0;
while (totalValores < 10) {
    let valor = Number(prompt("Digite um valor: "));
    somatorio += valor;
    totalValores++;

}
media = somatorio / totalValores;
console.log(`O somatório dos valores é: ${somatorio}`);
console.log(`A média dos valores é: ${media}`);
console.log(`O total de valores lidos é: ${totalValores}`);
