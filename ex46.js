// Exercício 45: Somatório dos Valores Pares
const prompt = require('prompt-sync')();
let somasPares = 0;
for (let i = 2; i <= 500; i += 2) {
    somasPares += i;
}
console.log(`A soma dos valores pares de 1 a 500 é: ${somasPares}`);
