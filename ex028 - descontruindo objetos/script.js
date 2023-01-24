let pessoa = {
  nome: "Mateus",
  sobrenome: "Alves",
  idade: 22,
  social: {
    instagram: {
      url: "@mate.alves",
      seguidores: 1469,
    },
    youtube: "MC Mocinho",
  },
  //   nomeCompleto: function () {
  //     return `${this.nome} ${this.sobrenome}`;
  //   },
};

// console.log(pessoa.nomeCompleto());

//----método 1
// let nome = pessoa.nome;
// let sobrenome = pessoa.sobrenome;
// let idade = pessoa.idade;

//----método mais eficáz
//novo nome da let
//caso não tenha o objeto idade, coloca valor padrão, se tiver ele pega o da propriedade original
let { nome: pessoaNome, sobrenome, idade = 22 } = pessoa;
console.log(pessoaNome, sobrenome, idade);

//pegar objeto dentro do objeto - método1
let { youtube } = pessoa.social;
console.log(youtube);

//pegar objeto dentro do objeto - método2
let {
  nome,
  social: {
    instagram: { url: instagram },
  }, //renomear para instagram
} = pessoa;
console.log(nome, idade, instagram);

//método1
// function pegarNomeCompleto(obj) {
//     return obj.nome+' '+obj.sobrenome;
// }

function pegarNomeCompleto({
  nome,
  sobrenome,
  social: {
    instagram: { url: instagram },
  },
}) {
  return `${nome} ${sobrenome} (Siga no Instagram ${instagram})`;
}

console.log(pegarNomeCompleto(pessoa));

//método2
const data = {
  nome: { pessoa1: "João", pessoa2: "Pedro" },
  sobrenome: { pessoa1: "Silva", pessoa2: "Alcantara" },
  nomeCompleto: function () {
    return this.nome.pessoa2 + " " + this.sobrenome.pessoa1;
  },
};

console.log(data.nomeCompleto());
