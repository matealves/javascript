class Pessoa {
  // atributos = variáveis ou características
  _nome;
  _idade;
  _peso;
  _altura;

  // Atributos com underline na frente, existe uma "indicação" que são atributos privados
  // Quando tem # também

  // métodos = funções ou comportamentos
}

// criar novo objeto a partir da class (instanciar classe)
let pessoa1 = new Pessoa();
let pessoa2 = new Pessoa();

pessoa1["_nome"] = "Mateus";
pessoa1._idade = 23;
pessoa1._peso = 56.6;
pessoa1._altura = 1.71;

pessoa2._nome = "Edson";
pessoa2["_idade"] = 45;
pessoa2._peso = 64.2;
pessoa2._altura = 1.62;

console.log(pessoa1);
console.log(pessoa2);
