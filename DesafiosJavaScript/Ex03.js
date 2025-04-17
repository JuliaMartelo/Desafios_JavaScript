//3. Peça uma frase e uma letra, e retorne quantas palavras começam com essa letra (ex:
//&#39;a&#39;). Use split(), startsWith() e filter().

var prompt = require('prompt-sync')();

const frase = prompt("Digite uma frase:");
const letra = prompt("Digite uma letra:").toLowerCase();

const palavras = frase.split(" ");

const letraselecionada = palavras.filter(palavra =>
  palavra.toLowerCase().startsWith(letra)
);

console.log(`Número de palavras que começam com "${letra}": ${letraselecionada.length}`);