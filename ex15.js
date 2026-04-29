const prompt = require("prompt-sync")();

let n1 = Number(prompt("Digite o primeiro valor numérico inteiro: "));
let n2 = Number(prompt("Digite o segundo valor numérico inteiro: "));
let n3 = Number(prompt("Digite o terceiro valor numérico inteiro: "));

console.log("A quadrado da soma é: " + ((n1 + n2 + n3) ** 2));
