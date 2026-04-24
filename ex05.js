const prompt = require('prompt-sync')();

let distancia = Number(prompt("Digite a distância percorrida (km): "));
let consumo = Number(prompt("Digite o consumo do veículo em quilômetros por litro (km/l): "));

let litros = distancia / consumo;

console.log("Distancia: " + distancia + " km");
console.log("Consumo: " + consumo + " km/l");
console.log("Litros: " + litros.toFixed(2) + " l");