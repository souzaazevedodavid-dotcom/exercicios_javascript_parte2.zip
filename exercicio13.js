// ============================================================
// Exercício 13 - Calcular potência com laço
// Usuário informa o número e o expoente
// ============================================================

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite a base: ', (baseStr) => {
    rl.question('Digite o expoente: ', (expStr) => {
        let base = parseFloat(baseStr);
        let expoente = parseInt(expStr);

        if (isNaN(base) || isNaN(expoente) || expoente < 0) {
            console.log('Digite valores válidos (expoente >= 0).');
            rl.close();
            return;
        }

        let resultado = 1;

        console.log(`\nCalculando ${base} ^ ${expoente}:\n`);

        if (expoente === 0) {
            console.log('Qualquer número elevado a 0 é 1.');
        } else {
            for (let i = 1; i <= expoente; i++) {
                resultado *= base;
                console.log(`Passo ${i}: ${base} ^ ${i} = ${resultado}`);
            }
        }

        console.log(`\n✅ Resultado: ${base} elevado a ${expoente} = ${resultado}`);
        rl.close();
    });
});
