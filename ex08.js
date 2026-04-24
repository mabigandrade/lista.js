const prompt = require('prompt-sync')();

let n1 = Number(prompt("Digite o primeiro número: "));
let n2 = Number(prompt("Digite o segundo número: "));
let n3 = Number(prompt("Digite o terceiro número: "));
let n4 = Number(prompt("Digite o quarto número: "));

console.log("Adições:");
console.log(n1 + "+" + n2 + "=" + (n1 + n2));
console.log(n1 + "+" + n3 + "=" + (n1 + n3));
console.log(n1 + "+" + n4 + "=" + (n1 + n4));
console.log(n2 + "+" + n3 + "=" + (n2 + n3));
console.log(n2 + "+" + n4 + "=" + (n2 + n4));
console.log(n3 + "+" + n4 + "=" + (n3 + n4));

console.log("Multiplicações:");
console.log(n1 + "x" + n2 + "=" + (n1 * n2));
console.log(n1 + "x" + n3 + "=" + (n1 * n3));
console.log(n1 + "x" + n4 + "=" + (n1 * n4));
console.log(n2 + "x" + n3 + "=" + (n2 * n3));
console.log(n2 + "x" + n4 + "=" + (n2 * n4));
console.log(n3 + "x" + n4 + "=" + (n3 * n4));