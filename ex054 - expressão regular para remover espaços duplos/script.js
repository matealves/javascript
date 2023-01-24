let string =
  "Esta      string      tem   alguns    espaços     desnecessários!";
console.log(string);

function removerEspacosDuplicados(str) {
  return str.replace(/( )+/g, " ");
}

let newStr = removerEspacosDuplicados(string);
console.log(newStr);

console.log(removerEspacosDuplicados("Olá                Mundo!"));
console.log(removerEspacosDuplicados("A    função    funcionou       mesmo!"));
