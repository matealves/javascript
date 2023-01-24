let lista = ["Ovo", "Farinha", "Leite", "Massa"];
let lista2 = ["Prato", "Liquidificador", "Forno"];
let res = lista;

//juntar todos valores do array
res = lista.toString();

//transforma em string e separa pelo valor escolhido
res = lista.join("-");

//posição de item específico do array (se nao -1)
res = lista.indexOf("Leite");

//remove primeiro item do array
lista.shift();
//remove último item do array
lista.pop();
//valor removido
res = lista.pop();

//adiciona item no final do array
lista.push("Corante");

//alterar item específico do array
lista[0] = "Ovos";

//Remover itens do array
//(remover, quantos itens)
lista.splice(2, 1);

//Juntar arrays
res = lista.concat(lista2);

//Ordenar array ordem alfabética
lista.sort();
lista.reverse(); //inverte ordem */

const ordem = [9, 7, 8, 1, 4, 5, 6, 2, 3, 10];

//ordenando de forma crescente
console.log(ordem.sort((a, b) => a - b));

//ordenando de forma decrescente
console.log(ordem.sort((a, b) => b - a));
//

console.log(res);

//---- MÉTODOS MAIS AVANÇADOS ----

//--------- .map //percorrer cada item
let array = [45, 4, 9, 16, 25];
let array2 = [];

array2 = array.map(function (item) {
  //multiplica o array por 2
  return item * 2;
});

//ou
// for(let i in array) { //multiplica o array por 2
//     array2.push(array[i] *2)
// }

let map = array2;
console.log(map);

//-------- .filter //filtrar
let arr = [45, 4, 9, 16, 25];
let arr2 = [];

arr2 = arr.filter(function (item2) {
  // menores que 20
  if (item2 < 20) {
    return true;
  } else {
    return false;
  }
});

let filter = arr2;
console.log(filter);

//------ .every //verifica se TODOS itens bateu com a condição
//------ .some (vê se existe algum que condiz com a condição)
let ns = [45, 4, 9, 16, 25];
let ns2 = [];

ns2 = ns.every(function (itens) {
  // TODOS são maior que 20?

  //   if (itens > 20) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  return itens > 20 ? true : false; //resumindo if acima
});

let every = ns2;
console.log(every);

//-------- .find // retorna o prórpio item
//-------- .findIndex // retorna a posição do item
let list = [50, 41, 19, 6, 15];
let list2 = [];

// list2 = list.find(function(item){
list2 = list.findIndex(function (item) {
  return item == 41 ? true : false;
});

let find = list2;
console.log(find);

// exemplo 2 - .find

let obj = [
  { id: 129, nome: "Mateus", sobrenome: "Alves" },
  { id: 193, nome: "Paloma", sobrenome: "Silva" },
  { id: 145, nome: "Joelma", sobrenome: "Carvalho" },
  { id: 167, nome: "Gabriel", sobrenome: "Oliveira" },
];
let pessoa = obj.find((item) => {
  return item.id == 129 ? true : false;
});

let index = pessoa;
console.log(index);
