// ============================================================
// Exercício 12 - Números de 0 até 1000 de 10 em 10
// ============================================================

console.log('=== Números de 0 a 1000 (de 10 em 10) ===\n');

let numeros = [];
for (let i = 0; i <= 1000; i += 10) {
    numeros.push(i);
}

console.log(numeros.join(', '));
console.log(`\nTotal: ${numeros.length} números.`);
