//Você irá gerar uma média de duas notas, e caso a nota seje maior igual a 6, precisa aparecer uma mensagem de parabéns, caso não seje maior igual a 6, informe ao usuário que ele não passou.

var prompt = require('prompt-sync')();
let primeiraNota = parseFloat(prompt('Digite a primeira nota:'))
let segundaNota = parseFloat(prompt('Digite a segunda nota:'))

let media = (primeiraNota + segundaNota) / 2

if (media >= 6) {
    console.log("Meus parabéns!")
} else {
    console.log("Você não passou. Estude um pouco mais!")
}