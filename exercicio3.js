// ============================================================
// Exercício 3 - Verificar produtos vencidos
// Seu Margarido consulta produtos até digitar "sair"
// ============================================================

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntar(pergunta) {
    return new Promise((resolve) => {
        rl.question(pergunta, (resposta) => resolve(resposta));
    });
}

async function main() {
    console.log('=== Verificador de Produtos Vencidos ===');
    console.log('Digite "sair" no nome do produto para encerrar.\n');

    let hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    while (true) {
        let nome = await perguntar('Digite o nome do produto (ou "sair"): ');

        if (nome.toLowerCase().trim() === 'sair') {
            console.log('\nPrograma encerrado.');
            break;
        }

        if (nome.trim() === '') {
            console.log('Nome do produto não pode ser vazio!\n');
            continue;
        }

        let dataStr = await perguntar(`Digite a data de vencimento de "${nome}" (DD/MM/AAAA): `);
        let partes = dataStr.split('/');

        if (partes.length !== 3) {
            console.log('Formato de data inválido! Use DD/MM/AAAA\n');
            continue;
        }

        let dia = parseInt(partes[0]);
        let mes = parseInt(partes[1]) - 1;
        let ano = parseInt(partes[2]);
        let dataVencimento = new Date(ano, mes, dia);
        dataVencimento.setHours(0, 0, 0, 0);

        if (isNaN(dataVencimento.getTime())) {
            console.log('Data inválida!\n');
            continue;
        }

        if (dataVencimento < hoje) {
            console.log(`❌ ${nome}: VENCIDO (venceu em ${dataStr})\n`);
        } else if (dataVencimento.getTime() === hoje.getTime()) {
            console.log(`⚠️  ${nome}: VENCE HOJE (${dataStr})\n`);
        } else {
            console.log(`✅ ${nome}: VÁLIDO (vence em ${dataStr})\n`);
        }
    }

    rl.close();
}

main();
