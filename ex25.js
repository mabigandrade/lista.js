const prompt = require('prompt-sync')();

let base = Number (prompt("Insira a base da raiz: "));
let indice = Number (prompt("Insira o índice da raiz: "));

console.log("Raiz de base qualquer com índice qualquer: " + (base^(1/indice)));