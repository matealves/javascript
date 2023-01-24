// CRIAR OBJETO
let pessoa = {
  nome: "Mateus",
  idade: 23,
  peso: 56.5,
  altura: 1.7,
  doador: false,
};

let produtos = {
  descricao: [],
  preco: [],
};

const carros = {
  marca: ["Ford", "Fiat", "GM"],
  modelo: ["Ka", "Uno", "Corsa"],
  ano: [1999, 2005, 2010],
};

// como acessar uma propriedade usando .
/*
pessoa.nome
pessoa.idade
pessoa.peso
pessoa.altura
*/

// ACESSAR PROPRIEDADE usando ['']
/*
pessoa['nome']
pessoa['idade']
pessoa['peso']
pessoa['altura']
*/

// OPERAÇÃO IMC = peso / (altura * altura)
let imc = pessoa.peso / (pessoa.altura * pessoa.altura);

// .toFixed(X)
// limita o numero de casas decimais
console.log("IMC " + imc.toFixed(2));

// ALTERAR/ATUALIZAR VALOR de propriedade
pessoa.nome = "Mateus Alves";
produtos.descricao = ["Arroz"];
produtos.preco = [12.99];

// Usando spreed operator
produtos.descricao = [...produtos.descricao, "Feijão", "Carne"];
produtos.preco = [...produtos.preco, 9.99, 34.79];

console.log(produtos.descricao);
console.log(produtos.preco);

// Usando spreed operator em objetos const
carros.marca = [...carros.marca, "WV"];
carros.modelo = [...carros.modelo, "Fusca"];
carros.ano = [...carros.ano, 1979];

console.log(carros.marca);
console.log(carros.modelo);
console.log(carros.ano);
