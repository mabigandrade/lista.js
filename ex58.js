// Exercício 57: Cálculo da Área Total de uma Residência
const prompt = require('prompt-sync')();
let areaTotal = 0;
for (let i = 1; i <= 5; i++) {
    let nomeComodo = prompt(`Digite o nome do cômodo ${i}: `);
    let larguraComodo = Number(prompt(`Digite a largura do cômodo ${i}: `));
    let comprimentoComodo = Number(prompt(`Digite o comprimento do cômodo ${i}: `));
    areaComodo = larguraComodo * comprimentoComodo;
    areaTotal += areaComodo;
    console.log(`Cômodo: ${nomeComodo}, Área: ${areaComodo} metros quadrados.`);
}
console.log(`A área total da residência é: ${areaTotal} metros quadrados.`);