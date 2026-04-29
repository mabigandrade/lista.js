const prompt = require('prompt-sync')();

let distancia = Number (prompt("Digite a distancia em km: "));
let tempo = Number (prompt("Digite o tempo gasto em horas: "));

console.log("Velocidade em km/h: " + (distancia / tempo) + " km/h");
console.log("Velocidade em m/s: " + ((distancia * 1000) / (tempo * 3600)) + " m/s");
