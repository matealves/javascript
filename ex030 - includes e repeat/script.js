//includes verifica se tem no array (true : false)
let lista = ["ovo", "arroz", "feijao", "macarrao"];
console.log(lista.includes("arroz"));
console.log(lista);

//includes verifica se tem na string (true : false)
let nome = "Mateus".toLowerCase();
console.log(nome.includes("m"));
//Transformando e primeira letra em maiúscula
nome = nome[0].toUpperCase() + nome.substring(1);
console.log(nome);

//função repeat
let n = "Repetir ";
console.log(n.repeat(3));
console.log("1 ".repeat(10));
