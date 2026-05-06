const prompt = require('prompt-sync')();

let n1 = Number(prompt("Digite o primeiro valor"));

console.log(`O valor é par ou impar? ${n1 % 2 === 0 ? "Par " : "Impar"}`);
if (n1 % 2 === 0) {
    console.log(`O número ${n1} é par.`);
} else {
    console.log(`O número ${n1} é impar.`);
}