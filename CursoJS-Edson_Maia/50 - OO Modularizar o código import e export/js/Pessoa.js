export class Pessoa {
  // atributos = variáveis ou características
  // Atributos com underline ou # na frente, existe uma "indicação" que são atributos privados
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
