//Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.
// As opções podem ser: 1 - Par ou Ímpar, 2 - Faixa Etária, 3 - Classificação de Nota.
const prompt = require('prompt-sync')();
let opcao = parseInt(prompt("Escolha uma opção:\n1 - Par ou Ímpar\n2 - Faixa Etária\n3 - Classificação de Nota\nDigite sua opção: "));    
switch (opcao) {
    case 1:
        const numero = parseInt(prompt("Digite um número inteiro: "));
        if (numero % 2 === 0) {
            console.log("O número " + numero + " é par.");
        } else {
            console.log("O número " + numero + " é ímpar.");
        }
        break;2
    case 2:
        const idade = parseInt(prompt("Digite sua idade: "));
        if (idade >= 0 && idade <= 12) {
            console.log("Você é uma criança.");
        } else if (idade >= 13 && idade <= 17) {
            console.log("Você é um adolescente.");
        } else if (idade >= 18 && idade <= 59) {
            console.log("Você é um adulto.");
        } else if (idade >= 60) {    
            console.log("Você é um idoso.");
        } else {
            console.log("Idade inválida.");
        }
        break;
    case 3:
        const nota = parseFloat(prompt("Digite a nota (0 a 10): "));
        if (nota >= 0 && nota < 4) {
            console.log("Reprovado");
        } else if (nota >= 4 && nota < 7) {
            console.log("Recuperação");
        } else if (nota >= 7 && nota <= 10) {
            console.log("Aprovado");
        } else {
            console.log("Nota inválida");
        }
        break;
    default:
        console.log("Opção inválida. Tente novamente.");
}