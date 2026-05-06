const prompt = require('prompt-sync')();

let n1 = Number (prompt("Insira um valor numerico inteiro: "));

console.log("O valor do sucessor de n1: " + (n1 + 1));
console.log("O valor do antecessor de n1: " + (n1 - 1));