// Exercício 58: Maior e Menor Valores entre Valores Positivos
const prompt = require('prompt-sync')();
let maior = -Infinity;
let menor = Infinity;
while (true){
    let numero = Number(prompt("Digite um número positivo (ou um número negativo para encerrar): "));
    if (numero < 0) {
        break;
    }
    if (numero > maior) {
        maior = numero;
    }
    if (numero < menor) {
        menor = numero;
    }
}
console.log(`Maior valor: ${maior}`);
console.log(`Menor valor: ${menor}`);