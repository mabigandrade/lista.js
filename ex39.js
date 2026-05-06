const prompt = require('prompt-sync')();

let n1 = Number(prompt("Digite o primeiro valor numérico inteiro: ")); 

console.log("O valor é menor ou igual a 3: " + (n1 <= 3 ? "Sim" : "Não"));
if (n1 <= 3) {
    console.log(`O numero ${n1} é menor ou igual a 3.`);
} else {
    console.log(`O numero ${n1} não é menor ou igual a 3.`);
}