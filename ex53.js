// Exercício 52: Somatório de Grãos de Trigo no Tabuleiro de Xadrez
let totalGraos = 0;
let quadro = 1;
for (let i = 1; i <= 64; i++) {
    totalGraos += quadro;
    quadro *= 2;
}
console.log(`O somatório de grãos de trigo no tabuleiro de xadrez é: ${totalGraos}`);