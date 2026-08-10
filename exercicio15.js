// ============================================================
// Exercício 15 - Valor acumulado no cofrinho após 12 dias
// Dia 1: R$ 2,00 | Dia 2: R$ 4,00 | Dia 3: R$ 6,00 ...
// Aumenta R$ 2,00 a cada dia
// ============================================================

console.log('=== Cofrinho - 12 dias de depósitos ===\n');

let total = 0;
let deposito = 2; // começa com 2 no dia 1

console.log('Dia | Depósito (R$) | Acumulado (R$)');
console.log('----|---------------|---------------');

for (let dia = 1; dia <= 12; dia++) {
    total += deposito;
    console.log(`${String(dia).padStart(3)} | ${deposito.toFixed(2).padStart(13)} | ${total.toFixed(2).padStart(13)}`);
    deposito += 2;
}

console.log(`\n✅ Valor total acumulado após 12 dias: R$ ${total.toFixed(2)}`);
