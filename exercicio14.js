// ============================================================
// Exercício 14 - Números ímpares decrescentes começando de 100
// ============================================================

console.log('=== Números ímpares decrescentes a partir de 100 ===\n');

let impares = [];
for (let i = 99; i >= 1; i -= 2) {
    impares.push(i);
}

console.log(impares.join(', '));
console.log(`\nTotal: ${impares.length} números.`);
