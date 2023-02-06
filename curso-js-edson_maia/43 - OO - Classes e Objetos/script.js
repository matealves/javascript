class Pessoa {
  // atributos = variáveis ou características
  nome;
  idade;
  peso;

  // métodos = funções ou comportamentos
}

// criar novo objeto a partir da class (instanciar classe)
let pessoa1 = new Pessoa();
let pessoa2 = new Pessoa();

pessoa1["nome"] = "Mateus";
pessoa1.idade = 23;
pessoa1.peso = 56.6;

pessoa2.nome = "Edson";
pessoa2["idade"] = 45;
pessoa2.peso = 64.2;

console.log(pessoa1);
console.log(pessoa2);
