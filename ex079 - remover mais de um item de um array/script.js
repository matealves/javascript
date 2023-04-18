// remover mais de 1 elemento
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// splice - fatiamento de array (altera array original)
// índice inicial - quantos elementos retirar

const removidos = arr.splice(2, 4); // elementos removidos
console.log(removidos);
console.log(arr);
