// ============================================================
// Exercício 16 - Caixa d'água com vazamento
// Inicia com 150 litros, perde 7 litros por hora
// Para enquanto o volume ainda for >= 0
// ============================================================

console.log('=== Simulação de Vazamento da Caixa d\'Água ===\n');

let volume = 150;
let perdaPorHora = 7;
let horas = 0;

console.log(`Início: ${volume} litros`);

while (volume - perdaPorHora >= 0) {
    volume -= perdaPorHora;
    horas++;
    console.log(`Após ${horas} hora(s): ${volume} litros`);
}

console.log(`\n✅ Água restante no final: ${volume} litros`);
console.log(`(Após ${horas} horas de vazamento)`);
console.log(`Na próxima hora o volume ficaria negativo (${volume - perdaPorHora} litros), então o laço parou.`);
