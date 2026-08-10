// ============================================================
// Exercício 11 - Imprimir quadrado com asteriscos
// Lê altura e largura e imprime o quadrado (borda)
// ============================================================

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite a altura: ', (alturaStr) => {
    rl.question('Digite a largura: ', (larguraStr) => {
        let altura = parseInt(alturaStr);
        let largura = parseInt(larguraStr);

        if (isNaN(altura) || isNaN(largura) || altura < 1 || largura < 1) {
            console.log('Digite valores válidos (maiores que 0).');
            rl.close();
            return;
        }

        console.log(`\nQuadrado ${altura} x ${largura}:\n`);

        for (let i = 0; i < altura; i++) {
            let linha = '';
            for (let j = 0; j < largura; j++) {
                // Borda: primeira/última linha ou primeira/última coluna
                if (i === 0 || i === altura - 1 || j === 0 || j === largura - 1) {
                    linha += '* ';
                } else {
                    linha += '  ';
                }
            }
            console.log(linha.trimEnd());
        }

        rl.close();
    });
});
