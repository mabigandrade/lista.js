const prompt = require('prompt-sync')();

let n1 = Number (prompt("Digite um valor em real: "));
let cotacao = Number(prompt("Digite a cotação do dólar: "));

console.log("Valor em dolar: " + (n1 / cotacao));