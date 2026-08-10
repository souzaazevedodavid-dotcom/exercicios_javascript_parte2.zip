// ============================================================
// Exercício 9 - Quantidade de pontos de Gabriel
// Mariana = 18, Sabrina = 22
// Gabriel = 1/4 da soma de Mariana e Sabrina + 17
// ============================================================

let mariana = 18;
let sabrina = 22;
let soma = mariana + sabrina;
let umQuarto = soma / 4;
let gabriel = umQuarto + 17;

console.log('=== Pontos de Gabriel ===\n');
console.log(`Mariana: ${mariana} pontos`);
console.log(`Sabrina: ${sabrina} pontos`);
console.log(`Soma: ${mariana} + ${sabrina} = ${soma}`);
console.log(`1/4 da soma: ${soma} ÷ 4 = ${umQuarto}`);
console.log(`Pontos de Gabriel: ${umQuarto} + 17 = ${gabriel}`);
console.log(`\n✅ Gabriel tem ${gabriel} pontos.`);
