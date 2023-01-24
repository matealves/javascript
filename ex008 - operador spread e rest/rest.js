//Quando não se sabe a quantidade de parâmetros
//método1
function adicionar(...numeros) {
  console.log(numeros);
}
adicionar(5, 6, 7, 8, 9, 10);

//método2
function pessoas(...nomes) {
  console.log(nomes);
}
pessoas("Bonieky", "Paulo", "Antonio");

//método3 - Spred + Rest
function add(convidados, ...novosConvidados) {
  let novoConjunto = [...convidados, ...novosConvidados];
  return novoConjunto;
}

let convidados = ["Mateus", "Roane"];
let oters = add(convidados, "Maria", "Gabriel", "Cicero");
console.log(oters);

// método4 - Spred + Rest + Arrow function
let addCar = (carros, ...novosCarros) => {
  let listaCarros = [...carros, ...novosCarros];
  return listaCarros;
};

let carros = ["Jetta", "Gol"];
let otersCars = addCar(carros, "Polo", "Fox");
console.log(otersCars);
