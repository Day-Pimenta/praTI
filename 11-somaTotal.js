//Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.
const prompt = require('prompt-sync')();
const quantidadeNumeros = 5;
let somaTotal = 0;
for (let i = 0; i < quantidadeNumeros; i++) {
    const numero = parseFloat(prompt("Digite um número: "));
    somaTotal += numero;
}
console.log("A soma total dos números é: " + somaTotal);
