// Atributos com underline ou # na frente, existe uma "indicação" que são atributos privados

class Pessoa {
  // atributos = variáveis ou características
  _nome;
  _idade;
  _peso;
  _altura;
  _imc;

  // métodos = funções ou comportamentos
  // metódo constructor
  constructor(nome, idade, peso, altura) {
    this._nome = nome;
    this._idade = idade;
    this._peso = peso;
    this._altura = altura;
    this._imc = this._peso / (this._altura * this._altura);
  }

  //método específico
  calculaImc() {
    return (this._peso / (this._altura * this._altura)).toFixed(1);
  }
}

// ao criar uma nova instância da classe, o método constructor permite inicializar dados de novos objetos ao criar ele

// criar novo objeto a partir da class (instanciar classe)
let pessoa1 = new Pessoa("Mateus", 23, 56.5, 1.71);
let pessoa2 = new Pessoa("Edson", 45, 64.2, 1.62);
let pessoa3 = new Pessoa("Bia", 23, 75.4, 1.81);
let pessoa4 = new Pessoa("Ana", 28, 85.5, 1.42);

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);

console.log(`IMC do(a) ${pessoa1["_nome"]}: ${pessoa1.calculaImc()}`);
console.log(`IMC do(a) ${pessoa2["_nome"]}: ${pessoa2.calculaImc()}`);
console.log(`IMC do(a) ${pessoa3["_nome"]}: ${pessoa3.calculaImc()}`);
console.log(`IMC do(a) ${pessoa4["_nome"]}: ${pessoa4.calculaImc()}`);
