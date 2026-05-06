const prompt = require ('prompt-sync')();

let raio = Number (prompt("Digite o valor do raio: "));
const PI = 3.14;
console.log(" Volume da esfera: " + ((4/3) * PI * (raio ** 3)));
