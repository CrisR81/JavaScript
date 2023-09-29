var prompt = require('prompt-sync')();

let senha;

do {
    senha = prompt("Digite a senha: ")

    if (senha != "123") {
        
        console.log("Senha incorreta!");
    }
    
} while (senha != "123");

console.log("Senha correta!");