//Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.

const prompt = require('prompt-sync')();
let numero = parseInt(prompt("Digite sua idade: "));
if (numero >= 0 && numero <= 12) {
    console.log("Você é uma criança.");
}
else if (numero >= 13 && numero <= 17) {
    console.log("Você é um adolescente.");
}
else if (numero >= 18 && numero <= 59) {
    console.log("Você é um adulto.");
}
else if (numero >= 60) {    
    console.log("Você é um idoso.");
}
else {
    console.log("Idade inválida.");
}

