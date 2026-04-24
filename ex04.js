const prompt = require('prompt-sync')();

let raio = Number(prompt("Digite o raio da lata (cm): "));
let altura = Number(prompt("Digite a altura da lata (cm): "));

let volume = Math.PI * Math.pow(raio, 2) * altura;

console.log("Volume : " + volume.toFixed(2) + " cm³");