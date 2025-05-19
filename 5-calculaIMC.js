//Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.
const prompt = require('prompt-sync')();
let peso = parseFloat(prompt("Digite o peso em quilogramas:"));
let altura = parseFloat(prompt("Digite a altura em metros:"));

const imc = peso / (altura * altura);
console.log("Seu IMC é: " + imc);

if (imc < 18.5) {
    console.log("Baixo peso");
    console.log("IMC abaixo de 18.5. Seu corpo merece cuidado e atenção. Valorize cada passo rumo ao equilíbrio.");
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Peso normal");
    console.log("IMC entre 18.5 e 24.9. Parabéns por manter um peso saudável! Isso é resultado de boas escolhas e disciplina. Continue se cuidando com amor");
} else if (imc >= 25 && imc <= 29.9) {
    console.log("Sobrepeso");
    console.log("IMC entre 25 e 29.9. Cada mudança começa com o primeiro passo — e você já está no caminho certo ao buscar entender sua saúde");
} else {
    console.log("Obesidade");
    console.log("IMC acima de 30. O número não define quem você é, mas pode ser um ponto de partida para cuidar melhor de si. ");
}

