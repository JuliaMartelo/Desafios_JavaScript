//5. Crie uma função que remove espaços repetidos de uma frase (ex: &quot;Olá mundo bonito&quot;
//→ &quot;Olá mundo bonito&quot;), usando split(), filter() e join().

function removerEspacosRepetidos(frase) {
    return frase
      .split(' ')                    // divide a frase em partes sempre que houver um espaço
      .filter(palavra => palavra)   // remove todos os elementos vazios (ou seja, espaços extras)
      .join(' ');                   // junta tudo de novo com um único espaço
  }
  
  // Exemplo de uso:
  const frase = "Olá   mundo     bonito";
  console.log(removerEspacosRepetidos(frase));  // Saída: "Olá mundo bonito"
  