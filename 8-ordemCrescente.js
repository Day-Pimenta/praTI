//Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente

const prompt = require('prompt-sync')();
let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
let valor2 = parseFloat(prompt("Digite o segundo valor: "));
let menor, maior;
if (valor1 < valor2) {
    menor = valor1;
    maior = valor2;
}
else {
    menor = valor2;
    maior = valor1;
}
console.log("Valores em ordem crescente: " + menor + ", " + maior);
