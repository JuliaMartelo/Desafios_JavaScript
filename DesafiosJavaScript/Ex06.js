//6. Peça uma frase e retorne cada palavra com a primeira letra maiúscula. Use split(),
//map(), toUpperCase() e slice().

var prompt = require('prompt-sync')();

let frase = prompt("Digite uma frase: ");

function palavra() {
  
    
    const resultado = frase
      .split(' ') // vai separa por espaço!
      .map(frase => 
        frase.charAt(0).toUpperCase() + frase.slice(1).toLowerCase()
      )
      .join(' ');
  
    
    return resultado;
    
  }
  console.log(palavra());