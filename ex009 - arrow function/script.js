// => indica que os parâmetros são de uma função anônima, indicando que está atrelada a execução a seguir =>
function adicionar(...numeros) {
  //ex01 - sem definir variável - operação direta com parâmetro
  // let total = numeros.reduce((atual, x) => atual + x);

  // ex02
  let total = numeros.reduce((atual, x) => {
    return atual + x;
  });
  console.log(total);
}
adicionar(1, 2, 3, 4, 5, 6, 7, 8);

//.reduce() = função que recebe número atual e próximo número do array, até acabar...

// ex03
//function add(...num) {
let add = (...num) => {
  let somar = (num) => {
    let total2 = 0;
    for (let i in num) {
      total2 += num[i];
    }
    return total2;
  };
  console.log(somar(num));
};

add(5, 7, 8, 6, 4, 5, 9);

console.log('End script.js');
