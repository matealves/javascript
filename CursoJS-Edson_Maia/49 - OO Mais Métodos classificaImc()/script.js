// Atributos com underline ou # na frente, existe uma "indicação" que são atributos privados

class Pessoa {
  // atributos = variáveis ou características
  _nome;
  _idade;
  _peso;
  _altura;
  _imc;
  static totalPessoas = 0; //atributo static de classe

  // métodos = funções ou comportamentos
  // metódo constructor
  constructor(nome, idade, peso, altura) {
    this._nome = nome;
    this._idade = idade;
    this._peso = peso;
    this._altura = altura;
    this._imc = this._peso / (this._altura * this._altura);
    Pessoa.totalPessoas += 1;
  }

  //método específico
  calculaImc() {
    return (this._peso / (this._altura * this._altura)).toFixed(1);
  }

  classificaImc() {
    // pegar o
    let valorImc = this.imc.toFixed(1);
    let classificacao = "";

    if (valorImc < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (valorImc <= 24.9) {
      classificacao = "Peso normal";
    } else if (valorImc <= 29.9) {
      classificacao = "Sobrepeso";
    } else if (valorImc <= 34.9) {
      classificacao = "Obesidade grau I";
    } else if (valorImc <= 39.9) {
      classificacao = "Obesidade grau II";
    } else if (valorImc >= 40) {
      classificacao = "Obesidade grau III";
    } else {
      classificacao = "Peso inválido";
    }

    return classificacao;
  }

  // get = pegar
  get nome() {
    return this._nome;
  }
  get idade() {
    return this._idade;
  }
  // get peso() {
  //   return this._peso;
  // }
  get altura() {
    return this._altura;
  }
  get imc() {
    return this._imc;
  }
  get totalPessoas() {
    return Pessoa.totalPessoas;
  }

  // set = configurar, editar, alterar
  set nome(novoNome) {
    this._nome = novoNome;
  }
  set idade(novaIdade) {
    this._idade = novaIdade;
  }
}

// ao criar uma nova instância da classe, o método constructor permite inicializar dados de novos objetos ao criar ele

// criar novo objeto a partir da class (instanciar classe)
let pessoa1 = new Pessoa("Mateus", 23, 56.5, 1.71);
let pessoa2 = new Pessoa("Edson", 45, 41.2, 1.62);
let pessoa3 = new Pessoa("Bia", 23, 85.4, 1.81);
let pessoa4 = new Pessoa("Ana", 28, 85.5, 1.42);

console.log("Total de pessoas criadas: ", Pessoa.totalPessoas);

// console.log("Nome:", pessoa1.nome); // exibe pq tem get
// console.log("Idade:", pessoa1.idade); // exibe pq tem get
// console.log("peso:", pessoa1.peso);

pessoa1.nome = "Alves Mateus"; // foi pq tem set
pessoa1.idade = 45; // foi pq tem set
pessoa1.peso = 80.4;
pessoa1.altura = 1.45;

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);

console.log(
  `IMC do(a) ${
    pessoa1["_nome"]
  }: ${pessoa1.calculaImc()} - ${pessoa1.classificaImc()}`
);
console.log(
  `IMC do(a) ${
    pessoa2["_nome"]
  }: ${pessoa2.calculaImc()} - ${pessoa2.classificaImc()}`
);
console.log(
  `IMC do(a) ${
    pessoa3["_nome"]
  }: ${pessoa3.calculaImc()} - ${pessoa3.classificaImc()}`
);
console.log(
  `IMC do(a) ${
    pessoa4["_nome"]
  }: ${pessoa4.calculaImc()} - ${pessoa4.classificaImc()}`
);
