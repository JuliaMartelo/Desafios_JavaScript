//7.Peça um texto e retorne quantos dígitos numéricos ele contém usando split() e
//filter() com isNaN().

function contarDigitos(texto) {
    let caracteres = texto.split(""); // separa todas as letras e números
    let apenasNumeros = caracteres.filter(caractere => {
      return !isNaN(caractere) && caractere !== " "; // filtra só o que for número
    });
    return apenasNumeros.length; // conta quantos números tem
  }
  
  // Exemplo de uso:
  let textoDoUsuario = prompt("Digite um texto:");
  let quantidade = contarDigitos(textoDoUsuario);
  console.log("Quantidade de dígitos numéricos:", quantidade);