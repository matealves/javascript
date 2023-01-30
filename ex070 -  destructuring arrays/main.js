const [n1, n2, n3] = [1, 3, 5];
console.log(n1, n2, n3);

const array = [50, 185, 98, 44, 35];
const [number1, , number3, number4, ,] = array;
console.log(number1, number3, number4);

// #################### parâmetros de funções
// tiver um array como parâmetro
const sumFirstAndThirdNumber = ([firstEvenNumber, , thirdEvenNumber = 0]) =>
  firstEvenNumber + thirdEvenNumber;

console.log(sumFirstAndThirdNumber([2, 4]));
