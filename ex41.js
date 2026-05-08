const prompt = require('prompt-sync')();
// Exercício 40: Soma e Verificação
let n1 = Number(prompt("Digite o primeiro valor numérico inteiro: "));
let n2 = Number(prompt("Digite o segundo valor numérico inteiro: "));
let n3 = Number(prompt("Digite o terceiro valor numérico inteiro: "));

let soma = n1 + n2 + n3;
console.log(`A soma dos números é: ${soma}`);
if (soma < 100) {
    console.log("A soma é menor que 100.");
} else {
    console.log("A soma não é menor que 100.");
}
