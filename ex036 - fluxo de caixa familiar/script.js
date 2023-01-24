/* ### SISTEMA DE GASTOS FAMILIAR

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
  * receitas: []
  * despesas: []
  
Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo
*/

let family = {
  receitas: [2500, 3200.5, 250.43, 360.45],
  despesas: [320.34, 128.45, 176.87, 1450.0],
};

function sum(array) {
  let total = 0;

  for (let value of array) {
    total += value;
  }
  return total;
}

function calculateBalance() {
  const calcReceitas = sum(family.receitas);
  const calcDespesas = sum(family.despesas);

  const total2 = calcReceitas - calcDespesas;
  const isOk = total2 >= 0;

  let balaceText = "negativo";

  if (isOk) {
    balaceText = "positivo";
  }
  console.log(`Seu saldo é ${balaceText}: R$ ${total2.toFixed(2)}`);
}

calculateBalance();
