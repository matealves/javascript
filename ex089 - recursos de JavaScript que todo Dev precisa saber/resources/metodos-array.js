// ##### map
// ler um array e modificar seu valores
const numeros = [2, 4, 6, 8, 10];
const numerosDobrados = numeros.map((n) => n * 2);

console.log("Números Dobrados", numerosDobrados);

// ##### filter
// filtra resultados específicos
const num2 = [25, 44, 624, 81, 7];
const numerosImpares = num2.filter((n) => n % 2 === 1);

console.log("Números Ímpares", numerosImpares);

// ##### reduce
// reduzir os elementos a um único valor
const num3 = [225, 144, 264, 18, 3];
const total = num3.reduce((total, n) => total + n, 0);

console.log("Total", total);

// ##### find
// encontrar primeira ocorrência específica
const num4 = [1, 2, 3, 4, 5];
const encontrado = num4.find((item) => item === 3);

console.log("encontrado", encontrado);

// ##### forEach
// percorrer cada item do array e fazer o que for necessário
const nomes = ["Mateus", "Roane", "Gabriel"];
nomes.forEach((nome) => console.log(nome));
