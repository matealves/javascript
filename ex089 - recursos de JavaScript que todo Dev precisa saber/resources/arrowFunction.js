// function default
function soma(a, b) {
  return a + b;
}

console.log("soma:", soma(5, 10));

// arrow function
const subtracao = (a, b) => {
  return a * b;
};

const multiplicacao = (a, b) => a * b;

console.log("subtracao:", subtracao(20, 4));
console.log("multiplicacao:", multiplicacao(5, 10));

// ##############

const numeros = [1, 2, 3, 4, 5];
const numerosPares = numeros.filter((numero) => numero % 2 === 0);

console.log("numeros pares:", numerosPares);
