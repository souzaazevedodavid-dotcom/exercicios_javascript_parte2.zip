// ============================================================
// Exercício 6 - Quantos ingressos Junior poderá vender?
// Área do local (trapézio) - área do palco (retângulo)
// Lotação: 4 pessoas por m²
// ============================================================

// Trapézio
let baseMaior = 120;
let baseMenor = 75;
let altura = 145;
let areaTrapezio = ((baseMaior + baseMenor) / 2) * altura;

// Palco (retângulo)
let larguraPalco = 15;
let alturaPalco = 8.5;
let areaPalco = larguraPalco * alturaPalco;

// Área disponível para o público
let areaPublico = areaTrapezio - areaPalco;

// Lotação máxima
let ingressos = Math.floor(areaPublico * 4);

console.log('=== Cálculo de Ingressos do Show ===\n');
console.log(`Área do Trapézio: [(${baseMaior} + ${baseMenor}) / 2] × ${altura} = ${areaTrapezio.toFixed(2)} m²`);
console.log(`Área do Palco: ${larguraPalco} × ${alturaPalco} = ${areaPalco.toFixed(2)} m²`);
console.log(`Área disponível: ${areaTrapezio.toFixed(2)} - ${areaPalco.toFixed(2)} = ${areaPublico.toFixed(2)} m²`);
console.log(`Lotação (4 pessoas/m²): ${areaPublico.toFixed(2)} × 4 = ${(areaPublico * 4).toFixed(2)}`);
console.log(`\n✅ Junior poderá vender ${ingressos} ingressos.`);
