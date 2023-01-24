// destructuring com arrays
let arr = [1, 2, 3, 4, 5];
let [num1, num2, num3, num4, num5] = arr;

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);

// ... com objetos
const pessoa = {
  nome: "Mateus",
  profissao: "Programador",
  idade: 23,
};

const { nome: nomeVar, profissao: profissaoVar, idade: idadeVar } = pessoa;
console.log(nomeVar);
console.log(profissaoVar);
console.log(idadeVar);

// ... com funções
function teste() {
  return ["Teste", "Teste 2"];
}

let [varA, varB] = teste();
console.log(varA);
console.log(varB);

// ignorando elementos (deixar vazio, apenas vírgula)
let arr2 = [5, 10, 15];
let [, el2, el3] = arr2;
console.log(el2);
console.log(el3);

// ... com strings
let novaString = "uva";
const [z, x, v] = novaString;
console.log(z);
console.log(x);
console.log(v);

// rest operator
let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [um, ...resto] = numeros2;
console.log(um);
console.log(resto);

// tomar cuidado
let obj2 = {
  x: 50,
  z: 100,
};

({ x: p, z: q } = obj2);
console.log(p);
console.log(q);
