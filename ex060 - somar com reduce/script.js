let arr = [1, 2, 3, 4, 5, 6];
let soma = 0;

// for (let i = 0; i < arr.length; i++) {
//   soma += arr[i];
// }

for (i in arr) {
  soma += arr[i];
}

console.log(soma);

//reduce
let arr2 = [1, 21, 3, 4, 5, 6];
let soma2 = arr2.reduce((total, item) => {
  return total + item;
}, 0);

console.log(soma2);
