// Exercício 53: Somatório da Fatorial de Quinze Valores
const prompt = require('prompt-sync')();
let somatorio = 0;
for (let i = 1; i <= 15; i++) {
    let fatorial = 1;
    for (let j = 1; j <= i; j++) {
        fatorial *= j;
    }
    somatorio += fatorial;
}
console.log(`O somatório da fatorial de quinze valores é: ${somatorio}`);