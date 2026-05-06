const prompt = require('prompt-sync')();

let n1 = Number(prompt("Insira um valor numerico inteiro: "));
let n2 = Number(prompt("Insira um outro valor inteiro: "));

console.log(" O maior e o menor valor entre os dois números:" + (Math.max(n1, n2)) + " é o maior valor e " + (Math.min(n1, n2)) + " é o menor valor." );
