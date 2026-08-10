// ============================================================
// Exercício 2 - Verificar se um número é primo
// Jason precisa descobrir se um número é primo ou não
// ============================================================

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ehPrimo(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

rl.question('Digite um número para verificar se é primo: ', (numStr) => {
    let numero = parseInt(numStr);

    if (isNaN(numero)) {
        console.log('Por favor, digite um número válido.');
    } else if (ehPrimo(numero)) {
        console.log(`\n${numero} é um número PRIMO!`);
    } else {
        console.log(`\n${numero} NÃO é um número primo.`);
    }

    rl.close();
});
