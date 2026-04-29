const prompt = require('prompt-sync')();

let raio = Number (prompt("Digite o valor do raio: "));
const PI = 3.14;

console.log("Area do circulo: " + (PI * (raio ** 2)));

