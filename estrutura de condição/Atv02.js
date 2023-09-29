//Faça um programa que receba um número inteiro do usuário 
// e informe se este número é positivo ou negativo.
var prompt = require('prompt-sync')();
let numero = parseInt(prompt("Digite um número para verificar se é positivo ou negativo:"))

if (numero > 0) {
    console.log("positivo");
} else if (numero < 0) {
    console.log("negativo");
} else {
    console.log("neutro");
}