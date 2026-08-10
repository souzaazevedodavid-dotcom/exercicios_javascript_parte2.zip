// ============================================================
// Exercício 17 - Robô subindo escada
// 20 degraus, 3 segundos por degrau
// ============================================================

console.log('=== Robô Subindo a Escada ===\n');

let totalDegraus = 20;
let tempoPorDegrau = 3;
let tempoAcumulado = 0;

for (let degrau = 1; degrau <= totalDegraus; degrau++) {
    tempoAcumulado += tempoPorDegrau;
    console.log(`Degrau ${degrau}: ${tempoAcumulado} segundos`);
}

console.log(`\n✅ Tempo total para subir os 20 degraus: ${tempoAcumulado} segundos`);
console.log(`(${(tempoAcumulado / 60).toFixed(1)} minutos)`);
