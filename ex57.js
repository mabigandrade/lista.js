// Exercício 56: Fatorial dos Valores Ímpares entre 1 e 100
const prompt = require('prompt-sync')();

let resultado = 1n; 

for (let i = 1; i <= 10; i += 2) { 
    let fatorial = 1n;
    
    
    for (let j = 1n; j <= BigInt(i); j++) {
        fatorial *= j;
    }
    
    resultado *= fatorial;
    console.log(`Fatorial de ${i}:`, fatorial.toString());
}

console.log(`O resultado final acumulado é: ${resultado.toString()}`);