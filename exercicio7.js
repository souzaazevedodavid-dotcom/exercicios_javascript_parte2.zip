// ============================================================
// Exercício 7 - Converter pés em metros
// 1 pé = 0.3048 metros
// ============================================================

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite a altura em pés: ', (pesStr) => {
    let pes = parseFloat(pesStr);

    if (isNaN(pes) || pes < 0) {
        console.log('Digite um valor válido em pés.');
    } else {
        let metros = pes * 0.3048;
        let cm = metros * 100;

        console.log(`\n${pes} pés equivalem a:`);
        console.log(`${metros.toFixed(4)} metros`);
        console.log(`ou aproximadamente ${cm.toFixed(2)} cm`);
    }

    rl.close();
});
