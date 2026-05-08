// Exercício 60: Quadrados dos Valores Inteiros de 15 a 200 Contando de 3 em 3
const prompt = require('prompt-sync')();
let inicial = 15;
for (let i = inicial; i <= 200; i += 3) {
    let quadrado = i ** 2;
    console.log(`O quadrado de ${i} é: ${quadrado}`);
}