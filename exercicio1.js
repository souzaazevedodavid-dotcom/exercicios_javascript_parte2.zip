// ============================================================
// Exercício 1 - Números ímpares no intervalo
// Kyle precisa descobrir os números ímpares dentre o intervalo
// ============================================================

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o número inicial do intervalo: ', (inicioStr) => {
    rl.question('Digite o número final do intervalo: ', (fimStr) => {
        let inicio = parseInt(inicioStr);
        let fim = parseInt(fimStr);

        if (isNaN(inicio) || isNaN(fim)) {
            console.log('Por favor, digite números válidos.');
            rl.close();
            return;
        }

        if (inicio > fim) {
            let temp = inicio;
            inicio = fim;
            fim = temp;
        }

        let impares = [];
        for (let i = inicio; i <= fim; i++) {
            if (i % 2 !== 0) {
                impares.push(i);
            }
        }

        if (impares.length === 0) {
            console.log('Não há números ímpares neste intervalo.');
        } else {
            console.log(`\nNúmeros ímpares entre ${inicio} e ${fim}:`);
            console.log(impares.join(', '));
            console.log(`Total: ${impares.length} número(s) ímpar(es).`);
        }

        rl.close();
    });
});
