// ============================================================
// Exercício 5 - Corrida entre dois carros
// Carro 1: inicia 10 km/h, +3 km/h por volta
// Carro 2: inicia 20 km/h, +1.5 km/h por volta
// ============================================================

let velCarro1 = 10;
let velCarro2 = 20;
let volta = 0;

console.log('=== Corrida entre Dois Carros ===\n');
console.log(`Início: Carro 1 = ${velCarro1.toFixed(1)} km/h | Carro 2 = ${velCarro2.toFixed(1)} km/h`);

while (velCarro1 <= velCarro2) {
    volta++;
    velCarro1 += 3;
    velCarro2 += 1.5;
    console.log(`Volta ${volta}: Carro 1 = ${velCarro1.toFixed(1)} km/h | Carro 2 = ${velCarro2.toFixed(1)} km/h`);
}

console.log(`\n✅ O Carro 1 ultrapassou o Carro 2 na volta ${volta}!`);
console.log(`Velocidade final Carro 1: ${velCarro1.toFixed(1)} km/h`);
console.log(`Velocidade final Carro 2: ${velCarro2.toFixed(1)} km/h`);
console.log(`Total de voltas: ${volta}`);
