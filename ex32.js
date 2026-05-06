const prompt = require('prompt-sync')();

let valorA = Number(prompt("Digite o valor de A: "));
let valorB = Number(prompt("Digite o valor de B: "));
let valorC = Number(prompt("Digite o valor de C: "));

let Bhaskara = (valorB ** 2) - (4 * valorA * valorC);
if(Bhaskara < 0){
    console.log(`Não existem raízes reais`);
}else{
    let x1 = (-valorB+Math.sqrt(Bhaskara))/(2*valorA);
    let x2 = (-valorB-Math.sqrt(Bhaskara))/(2*valorA);

    console.log(`O valor de x1 é: ${x1}`);
    console.log(`O valor de x2 é: ${x2}`);
}


