const prompt = require('prompt-sync')();

let n1 = Number(prompt("Digite o comprimento da caixa: "));
let n2 = Number(prompt("Digite a largura da caixa: "));
let n3 = Number(prompt("Digite a altura da caixa: "));

console.log("O volume da caixa é: " + (n1 * n2 * n3));
