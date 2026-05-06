const prompt = require('prompt-sync')();

let n1 = Number(prompt("Digite o primeiro valor numérico inteiro: "));
console.log("O valor esta na faixa de 1 até 9: " + (n1 >= 1 && n1 <= 9 ? "Sim" : "Não"));
if (n1 >= 1 && n1 <= 9) {
    console.log(`O numero ${n1} esta na faixa de 1 até 9.`);
} else {
    console.log(`O numero ${n1} não esta na faixa de 1 até 9.`);
}