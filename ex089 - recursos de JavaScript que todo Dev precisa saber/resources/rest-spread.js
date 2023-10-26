const numeros = [1, 2, 3];

// REST
// Ex: não define a quantidade de parâmetros a serem passados
function somaReduce(...numeros) {
  return numeros.reduce((total, numero) => total + numero);
}

// invocando a função com diferentes quantidades de argumentos
console.log("soma 1:", somaReduce(1, 2, 3, 4, 5, 6, 7));
console.log("soma 2:", somaReduce(8, 15, -4, 7));

// SPREAD
const n2 = [1, 2, 3];
const n3 = [4, 5, 6];

const juntarLista = [...n2, ...n3];
console.log("lista mesclada:", juntarLista);

// #########

const usuario = {
  nome: "Maria",
  email: "maria@email.com",
};

const usuarioComEndereco = { ...usuario, endereço: "Rua das Flores, 10" };

console.log("usuario:", usuarioComEndereco);
