// Atributos com underline ou # na frente, existe uma "indicação" que são atributos privados

class Pessoa {
  // atributos = variáveis ou características
  _nome;
  _idade;
  _peso;
  _altura;

  // métodos = funções ou comportamentos
  constructor(nome, idade, peso, altura) {
    this._nome = nome;
    this._idade = idade;
    this._peso = peso;
    this._altura = altura;
  }
}

// método constructor permite ao criar uma nova instância da classe, inicializar dados de novos objetos ao criar ele

// criar novo objeto a partir da class (instanciar classe)
let pessoa1 = new Pessoa("Mateus Alves", 23, 56.5, 1.71);
let pessoa2 = new Pessoa("Edson Maia", 45, 64.2, 1.62);

// pessoa1["_nome"] = "Mateus";
// pessoa1._idade = 23;
// pessoa1._peso = 56.6;
// pessoa1._altura = 1.71;

// pessoa2._nome = "Edson Maia";
// pessoa2["_idade"] = 45;
// pessoa2._peso = 64.2;
// pessoa2._altura = 1.62;

console.log(pessoa1);
console.log(pessoa2);
