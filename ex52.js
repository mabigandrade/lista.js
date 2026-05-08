// Exercício 51: Conversão de Graus Celsius em Fahrenheit
for (let celsius = 0; celsius <= 100; celsius += 10) {
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius}°C é igual a ${fahrenheit}°F`);
}