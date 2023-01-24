//método1 - função comum
function soma1(x, y) {
  return x + y;
}
console.log(soma1(10, 4));

//método2 - função em variável
let soma2 = function (a, b) {
  return a + b;
};
console.log(soma2(20, 2));

//método3 - arrow function
let soma3 = (c, d) => {
  return c + d;
};
console.log(soma3(45, 26));

//método3 - arrow function (sem chaves e de forma direta)
let soma4 = (e, f) => e + f;

console.log(soma4(41, 8));

//método4 - com apenas 1 parâmetro (parenteses opicional)
let letrasNoNome = (nome) => {
  return nome.length;
};
// let letrasNoNome = (nome) => nome.length;
// let letrasNoNome = nome => nome.length;
console.log(letrasNoNome("Mateus"));
