const prompt = require('prompt-sync')();
console.log("--- Conversor de Temperatura ---");

let temperaturaCelsius = Number(prompt("Digite a temperatura em Celsius: "));
let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;

console.log("Entrada: " + temperaturaFahrenheit);
console.log("Processamento: C = (212.0 - 32) * 5/9 = 100.0");
console.log("Saída: " + temperaturaCelsius);