// ============================================================
// Exercício 10 - Swap (troca de valores)
// A cada iteração as variáveis trocam de valor
// ============================================================

let primeiroNome = "will";
let segundoNome = "lucas";

console.log('=== Exercício Swap ===\n');
console.log(`Valores iniciais: primeiroNome = "${primeiroNome}", segundoNome = "${segundoNome}"\n`);

for (let i = 1; i <= 6; i++) {
    // Troca os valores
    let temp = primeiroNome;
    primeiroNome = segundoNome;
    segundoNome = temp;

    console.log(`Iteração ${i}: primeiroNome = "${primeiroNome}", segundoNome = "${segundoNome}"`);
}
