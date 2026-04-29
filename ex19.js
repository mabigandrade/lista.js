const prompt = require('prompt-sync')();

let votos_candidato1 = Number(prompt("Digite a quantidade de votos para o candidato 1: "));
let votos_candidato2 = Number(prompt("Digite a quantidade de votos para o candidato 2: "));
let votos_candidato3 = Number(prompt("Digite a quantidade de votos para o candidato 3: "));
let votos_nulos = Number(prompt("Digite a quantidade de votos nulos: "));
let votos_branco = Number(prompt("Digite a quantidade de votos em branco: "));

let total_votos = votos_candidato1 + votos_candidato2 + votos_candidato3 + votos_nulos + votos_branco;
let percentual_candidato1 = (votos_candidato1 / total_votos) * 100;
let percentual_candidato2 = (votos_candidato2 / total_votos) * 100;
let percentual_candidato3 = (votos_candidato3 / total_votos) * 100;
let percentual_nulos = (votos_nulos / total_votos) * 100;
let percentual_branco = (votos_branco / total_votos) * 100;

console.log("Percentual de votos para o candidato 1: " + percentual_candidato1.toFixed(2) + "%");
console.log("Percentual de votos para o candidato 2: " + percentual_candidato2.toFixed(2) + "%");
console.log("Percentual de votos para o candidato 3: " + percentual_candidato3.toFixed(2) + "%");
console.log("Percentual de votos nulos: " + percentual_nulos.toFixed(2) + "%");
console.log("Percentual de votos em branco: " + percentual_branco.toFixed(2) + "%");