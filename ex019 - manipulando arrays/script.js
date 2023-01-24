let techs = ["html", "css", "js"];

// adicionar um item no fim
techs.push("react");

// adicionar no começo
techs.unshift("sql");

// remover do fim
techs.pop();

// remover do começo
techs.shift();

// exibir somente alguns elementos do array
console.log(techs.slice(1, 3));

// remover 1 ou mais items em qualquer posição do array
techs.splice(1, 1);

// encontrar a posição de um elemento no array
let position = techs.indexOf("html");
techs.splice(position, 1); //remover o elemento

console.log(techs);
console.log(position);
