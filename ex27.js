const prompt = require('prompt-sync')();

let n1 = Number (prompt("Insira um valor numerico inteiro: "));
let n2 = Number (prompt("Insira um outro valor inteiro: "));


console.log("A divisão do primeiro número pelo segundo número: " + (n1 / n2) );
console.log("o quadrado do resultado da divisão: " + ((n1 / n2) ** 2 ));