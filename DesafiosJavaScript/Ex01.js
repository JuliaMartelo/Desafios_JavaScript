//1. Crie uma função que recebe um número como string (ex: &#39;12345678901&#39;) e retorna no
//formato de CPF (123.456.789-01) usando slice e concatenação.

var prompt = require('prompt-sync')();

let Num = prompt("Qual o seu CPF: ");

let cpfFormatado = Num.slice(0, 3) + "." + Num.slice(3, 6) + "." + Num.slice(6, 9) + "-" + Num.slice(9, 11);

console.log("CPF: ", cpfFormatado);