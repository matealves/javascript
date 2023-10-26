class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresenta() {
    return `Olá! Meu nome é ${this.nome} e tenho ${this.idade}`;
  }
}

const pessoa1 = new Pessoa("Mateus", 24);
console.log("Instância da classe:", pessoa1);
console.log("Método da classe:", pessoa1.apresenta());
console.log("\n");

const pessoa2 = new Pessoa("Gabriel", 27);
console.log("Instância da classe:", pessoa2);
console.log("Método da classe:", pessoa2.apresenta());
console.log("\n");
// #############

// para usar parâmetros como herança, utilizar o "super()" no constructor
class Funcionario extends Pessoa {
  constructor(nome, idade, salario) {
    super(nome, idade);
    this.salario = salario;
  }

  apresentaFuncionario() {
    return `funcionário: ${this.nome} - idade: ${this.idade} - salário: R$ ${this.salario}`;
  }
}

const funcionario1 = new Funcionario("João", 30, 5000);
console.log("Instância da classe:", funcionario1);
console.log("Método da classe:", funcionario1.apresentaFuncionario());
console.log("Método da classe herdada:", funcionario1.apresenta());
