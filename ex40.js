const prompt = require('prompt-sync')();

let n1 = Number(prompt("Digite o primeiro valor numérico inteiro: "));

console.log("O valor é divisivel por 3 e 5: " + (n1 % 3 === 0 && n1 % 5 === 0 ? "Sim" : "Não"));
if (n1 % 3 === 0 && n1 % 5 === 0) {
    console.log(`O numero ${n1} é divisivel por 3 e 5.`);
} else {
    console.log(`O numero ${n1} não é divisivel por 3 e 5.`);
}