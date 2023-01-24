//ex01
// const numbers = [1,4,5,9,14,23];
// const doubleNumbers = numbers.map(function(elem) {
//     return elem *2;
// })

// console.log(doubleNumbers);


//ex02 - com arrow function
const numbers = [1, 4, 5, 9, 14, 23];
const doubleNumbers = numbers.map( num => num *2)

console.log(doubleNumbers);

document.getElementById("demo").innerHTML = `<strong>RESULTADO EX01 - DOBRANDO VALORES DO ARRAY COM MAP:</strong><br><br> ${doubleNumbers}<br><br>`;


//ex03 - convertendo fahrenheit para celcius
// const fahrenheit = [0, 32, 45, 50, 75, 80, 120];
// const celcius = fahrenheit.map(function(elem) {
//     return ((elem - 32) * 5/9).toFixed(2);
// });

//ex04 - com arrow function
const fahrenheit = [0, 32, 45, 50, 75, 80, 120];
const celcius = fahrenheit.map( num => ((num - 32) * 5/9).toFixed(2));

console.log(celcius);

let n = "";
for(let x in celcius){
    n += celcius[x] + ", ";

}

document.getElementById("demo2").innerHTML = `<strong>RESULTADO EX02 - CONVERSOR DE FAHRENHEIT PARA CELCIUS COM 2 CASAS DECIMAIS:</strong><br><br> ${n}<br><br>`;