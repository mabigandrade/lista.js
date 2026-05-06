const prompt = require('prompt-sync')();

let n1 = Number(prompt("Digite o primeiro valor: "));
let n2 = Number(prompt("Digite o segundo valor: "));
let n3 = Number(prompt("Digite o terceiro valor: "));
let n4 = Number(prompt("Digite o quarto valor: "));

if (n1 % 2 === 0 && n1 % 3 === 0) {
    console.log(`O número ${n1} é divisível por 2 e 3.`);
} else {
    console.log(`O número ${n1} não é divisível por 2 e 3.`);
}

if (n2 % 2 === 0 && n2 % 3 === 0) {
    console.log(`O número ${n2} é divisível por 2 e 3.`);
} else {
    console.log(`O número ${n2} não é divisível por 2 e 3.`);
}

if (n3 % 2 === 0 && n3 % 3 === 0) {
    console.log(`O número ${n3} é divisível por 2 e 3.`);
} else {
    console.log(`O número ${n3} não é divisível por 2 e 3.`);
}

if (n4 % 2 === 0 && n4 % 3 === 0) {
    console.log(`O número ${n4} é divisível por 2 e 3.`);
} else {
    console.log(`O número ${n4} não é divisível por 2 e 3.`);
}

