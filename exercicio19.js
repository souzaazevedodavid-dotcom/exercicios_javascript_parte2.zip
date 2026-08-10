// ============================================================
// Exercício 19 - Escada de Eco (laços aninhados)
// O usuário informa quantas vezes o eco acontece
// ============================================================

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Quantas vezes o eco acontece? ', (nStr) => {
    let n = parseInt(nStr);

    if (isNaN(n) || n < 1) {
        console.log('Digite um número válido (>= 1).');
        rl.close();
        return;
    }

    console.log(`\nEco com ${n} repetições:\n`);

    // Laços aninhados
    for (let i = 1; i <= n; i++) {
        let linha = '';
        for (let j = 1; j <= i; j++) {
            linha += 'Olá ';
        }
        console.log(linha.trim());
    }

    rl.close();
});
