const dog = {
  name: "Tony Stark",
  breed: "Golden",
  // age: 4,
};

// propriedades veem antes da atribuição
// atribuir o objeto a desestruturar
const { name, breed } = dog;

// é possível dar um nome diferente da propriedade original
// é possível definir um valor padrão, caso NÃO exista na objeto
const { name: newName, breed: newBreed, age: newAge = 4 } = dog;

console.log(name, breed);
console.log(newName, newBreed, newAge);

// ############################### propriedades aninhadas

const cities = {
  paris: {
    country: "France",
    language: "French",
  },
  london: {
    country: "England ",
    language: "English",
  },
};

const {paris,  london: { country }} = cities;
console.log(country);

// ############################### parâmetros de funções
// quando receber objeto como parâmetro, passar apenas nome da propriedade
const getName = ({ name }) => name;
console.log(getName({ name: "Mateus" }));
