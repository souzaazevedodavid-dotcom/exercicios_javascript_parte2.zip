// ============================================================
// Exercício 4 - População Nigéria vs China
// Mostra a população ano a ano até a Nigéria ultrapassar a China
// ============================================================

let nigeria = 195.9;   // milhões
let china = 1393;      // milhões
let taxaNigeria = 0.038;
let taxaChina = 0.0037;
let anos = 0;

console.log('=== Crescimento Populacional: Nigéria vs China ===\n');
console.log(`Ano 0 (inicial) | Nigéria: ${nigeria.toFixed(2)} mi | China: ${china.toFixed(2)} mi`);

while (nigeria <= china) {
    nigeria *= (1 + taxaNigeria);
    china *= (1 + taxaChina);
    anos++;
    console.log(`Ano ${anos}         | Nigéria: ${nigeria.toFixed(2)} mi | China: ${china.toFixed(2)} mi`);

    if (anos > 500) {
        console.log('Limite de 500 anos atingido.');
        break;
    }
}

console.log(`\n✅ A Nigéria ultrapassará a China em ${anos} anos!`);
console.log(`População final Nigéria: ${nigeria.toFixed(2)} milhões`);
console.log(`População final China: ${china.toFixed(2)} milhões`);
