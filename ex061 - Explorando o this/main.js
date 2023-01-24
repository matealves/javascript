// function myFunc() {
//   console.log(this);
// }

// myFunc();

//############

// const person = {
//   firstName: "Walter",
//   lastName: "White",
//   nickName: "Heisenberg",
//   getFullName() {
//     // console.log(`${this.firstName} ${this.lastName} ou ${this.nickName}`);
//     const { firstName, lastName, nickName } = this;
//     return `${firstName} ${lastName} ou ${nickName}`;
//   },
//   printBio() {
//     const fullName = this.getFullName();
//     console.log(`${fullName} é um personagem da série Braking bad`);
//   },
//   laugh: () => {
//     console.log(this);
//     console.log(`${this.nickName} diz: hahahahah!`);
//   },
// };

// person.printBio();
// person.laugh();

//############

// class myClass {
//   constructor(value) {
//     this.prop1 = value;
//   }

//   isThisEqualObj() {
//     console.log(this === obj);

//     setTimeout(() => {
//       console.log(this === obj);
//     }, 1000);
//   }
// }

// const obj = new myClass("value");

// obj.isThisEqualObj();

//############

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   getName() {
//     return this.name;
//   }
// }

// const myCat = new Cat("Loki");
// console.log(myCat.getName());

// //############ mesmo resultado

// const makeCat = (name) => ({
//   getName: () => name,
// });

// const myCatMake = makeCat("Loki");
// console.log(myCatMake.getName());

//############

let form = document.querySelector('[data-js="form"]');
form.addEventListener("submit", (event) => {
  event.preventDefault();

  //   console.log(this.cep.value);  // sem arrow function (evitar usar this)
  console.log(event.target.cep.value); // funciona com as 2 funções
});
