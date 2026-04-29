const prompt = require('prompt-sync')();

const cotação = 5.25;
let n1 = Number(prompt("Digite o valor em dólar: "));
let cotacao = Number(prompt("Digite a cotação do dólar: "));

console.log("Valor em reais: " + (n1 * cotacao));




