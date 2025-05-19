//As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

 const prompt = require('prompt-sync')();
 let quantidadeMacas = parseInt(prompt("Digite o número de maçãs compradas: "));
 let precoPorMaca;
 if (quantidadeMacas < 12) {
     precoPorMaca = 0.30;
 } else {
     precoPorMaca = 0.25;
 }
 const valorTotal = quantidadeMacas * precoPorMaca;
 console.log("Valor total da compra: R$ " + valorTotal);
