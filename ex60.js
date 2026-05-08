// Exercício 59: Divisão Inteira Sem Usar o Operador de Divisão
const prompt = require('prompt-sync')();
let resultado = 0;
let dividendo = Number(prompt("Digite o dividendo: "));
let divisor = Number(prompt("Digite o divisor: "));

while (dividendo >= divisor) {
    dividendo -= divisor;
    resultado++;
}
console.log(`O resultado da divisão inteira é: ${resultado}`);
