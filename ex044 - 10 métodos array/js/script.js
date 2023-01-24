const data = [
  { name: "Matheus", age: 31, sallary: 2000, driverLicense: true },
  { name: "João", age: 18, sallary: 1500, driverLicense: false },
  { name: "Mariana", age: 22, sallary: 4000, driverLicense: true },
  { name: "Pedro", age: 50, sallary: 7200, driverLicense: true },
  { name: "Érica", age: 16, sallary: 0, driverLicense: false },
];

// 1 - reverse
// exemplo: filtro para ordenar produtos de mais novos
const reverseData = data.reverse();
console.log(reverseData);

// 2 - find
// exemplo: primeiro item que satisfaz a condição
const highSallary = 1000;

const highestSallary = data.find((user) => user.sallary > highSallary);
console.log(highestSallary);

// 3 - findIndex
// exemplo: identificar indice de item que satisfaz a condição
const lowestSallary = data.findIndex(
  (user) => user.sallary > 0 && user.sallary < 2000
);
console.log(lowestSallary);
// aumentar 200 de salario após descobrir indice
data[lowestSallary].sallary += 200;
console.log(data);

// 4 - includes
// exemplo: identificar se contém item específico
const numbers = [1, 2, 3, 4, 5, "teste"];
const hasFour = numbers.includes("teste");
console.log(hasFour); //return Boolean
console.log(numbers.includes(8)); //return Boolean

// 5 - map
// exemplo: modificar algo no array original
// percorre cada um dos itens e pode modificar cada um deles
data.map((user) => (user.newsletter = false));
console.log(data);

// 6 - filter
// exemplo: realizar um filtro baseado em uma condição
// somente quem tem CNH
const drivers = data.filter((user) => user.driverLicense);
console.log(drivers);

// 7 - reduce
// exemplo: reduzir dados do array em um único valor de retorno.
// somar todos salarios dos funcionarios
const sallariesSum = data.reduce(
  (totalSallary, user) => (totalSallary += user.sallary),
  0
);
console.log("Folha salarial: R$", sallariesSum);

// 8 - forEach
// exemplo: semelhante ao for convecional, nós definimos o que fazer
const showUserNames = (users) => {
  users.forEach((user) => {
    console.log(`Olá ${user.name}!`);
  });
};
showUserNames(data);

// 9 - some
// exemplo: verifica se ALGUM dado no array corresponde a concicao
let someoneWithNewsletter = data.some((user) => user.newsletter);
console.log("Algum usuário tem newsletter?", someoneWithNewsletter); //return Boolean

data[0].newsletter = true;
someoneWithNewsletter = data.some((user) => user.newsletter);
console.log("Algum usuário tem newsletter?", someoneWithNewsletter); //return Boolean

// 10 - every
// exemplo: verifica se TODOS no array corresponde a concicao
const everyUserHasName = data.every((user) => user.name);
console.log("Todos os nomes foram preenchidos?", everyUserHasName); //return Boolean

const everyUserHasGoogSallary = data.every((user) => user.sallary > 2000);
console.log(
  "Todos os salários são maiores que R$ 2.000?",
  everyUserHasGoogSallary
); //return Boolean
