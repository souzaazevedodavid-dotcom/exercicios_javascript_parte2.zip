// ============================================================
// Exercício 8 - Por quanto Guilherme deveria ter vendido o violão?
// Vendeu por R$ 360 (80% do valor). Quer lucro de 20%.
// ============================================================

let valorVendido = 360;
let porcentagemVendida = 0.80;

// Valor original (custo)
let valorOriginal = valorVendido / porcentagemVendida;

// Preço para ter 20% de lucro
let precoComLucro = valorOriginal * 1.20;

console.log('=== Cálculo do Preço Ideal do Violão ===\n');
console.log(`Valor vendido (80% do original): R$ ${valorVendido.toFixed(2)}`);
console.log(`Valor original (custo): R$ ${valorVendido.toFixed(2)} ÷ 0,80 = R$ ${valorOriginal.toFixed(2)}`);
console.log(`Para lucro de 20%: R$ ${valorOriginal.toFixed(2)} × 1,20 = R$ ${precoComLucro.toFixed(2)}`);
console.log(`\n✅ Guilherme deveria ter vendido por R$ ${precoComLucro.toFixed(2)}`);
