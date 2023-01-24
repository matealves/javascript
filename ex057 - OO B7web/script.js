class Person {
  static hands = 2; // Variável estática
  _age = 0;

  constructor(name) {
    this.name = name;
  }

  // Getter e Setter
  get age() {
    return this._age;
  }

  set age(x) {
    typeof x !== "number" ? this._age : (this._age = x);
  }

  // Método estático
  static sayBye() {
    console.log("Tchau");
  }

  sayHi() {
    console.log(`Oi, eu sou ${this.name} e tenho ${Person.hands} mãos.`);
  }
}

// Herança
class Student extends Person {
  constructor(name, id) {
    super(name);
    this.id = id;
  }
}

let p1 = new Student("Mateus", 21851);
p1.age = 23;
p1.sayHi();
Person.sayBye();

console.log(p1);

// Factory
function createPerson(name, age) {
  let p = new Person(name);
  p.age = age;
  return p;
}

console.log(createPerson("Neymar Jr", 31));
