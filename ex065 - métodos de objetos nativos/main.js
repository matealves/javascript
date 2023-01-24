// Object.assign(alvo, fonte) = mesclar/copiar objetos

const destino = { a: 1, b: 2 };
const origem = { b: 3, c: 4, d: 5 };

const destinoCopy = { ...destino };

const retorno = Object.assign(destinoCopy, origem);

console.log(retorno);

// ####################

const obj = { a: 1, b: 2 };
const copy = Object.assign({}, obj);

console.log(copy);

// ####################

const obj1 = { a: 1, b: 4 };
const obj2 = { c: 2, d: 5 };
const obj3 = { e: 3 };
const concatObj = Object.assign(obj1, obj2, obj3);

console.log(concatObj);

// ####################

const arrayDeEntrada = [
  ["abc", 2],
  ["def", 4],
];

const objDeEntrada = {
  abc: 2,
  def: 4,
};

const objeto = Object.fromEntries(arrayDeEntrada); // transformar em obj
const array = Object.entries(objDeEntrada); // transformar em array de arrays
console.log(objeto);
console.log(array);

// ####################
const objKeysAndValues = {
  notaMenor: 50,
  notaMaior: 100,
};
console.log(Object.keys(objKeysAndValues));
console.log(Object.values(objKeysAndValues));
