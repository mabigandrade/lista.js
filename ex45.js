// Exercício 44: Soma dos Cem Primeiros Números Naturais
const prompt = require('prompt-sync')();
let soma = 0;
for (let i = 1; i <= 100; i++) {
    soma += i;
}
console.log(`A soma dos cem primeiros números naturais é: ${soma}`);
