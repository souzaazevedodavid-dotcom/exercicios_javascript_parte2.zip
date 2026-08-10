// ============================================================
// Exercício 18 - Contador de 1 a 25 com "Pulo"
// Se divisível por 3, mostra "Pulo" no lugar do número
// ============================================================

console.log('=== Contador 1 a 25 (Pulo se divisível por 3) ===\n');

for (let i = 1; i <= 25; i++) {
    if (i % 3 === 0) {
        console.log('Pulo');
    } else {
        console.log(i);
    }
}
