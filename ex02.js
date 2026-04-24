const prompt = require('prompt-sync')();

let temperaturaCelsius = Number(prompt("Digite a temperatura em graus Celsius: "));

let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;

console.log("A temperatura convertida em Fahrenheit é: " + temperaturaFahrenheit + "°F");

