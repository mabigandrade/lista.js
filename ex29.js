const prompt = require('prompt-sync')();

let n1 = Number(prompt("Digite o primeiro valor numérico inteiro: "));

console.log(" O valor é positivo, negativo ou neutro? " + (n1 > 0 ? "Positivo" : n1 < 0 ? "Negativo" : "Neutro"));