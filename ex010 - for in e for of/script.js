// For in cria um loop, pegando as propriedades de um array ou objeto
// ex01
const numbers = [45, 4, 9, 16, 25];

let n = "";
for (let x in numbers) {
  n += numbers[x] + ", ";
}
console.log(n);

// ex02
const person = { fname: "Mateus", lname: "Alves", age: 22 };

let txt = "";
for (let x in person) {
  txt += person[x] + " ";
}
console.log(txt);

// ex03
const carros = ["Golf", "Onix", "HB20", "Fox"];

let html = "<ul>";
for (let c in carros) {
  html += "<li>" + carros[c] + "</li>";
}

html += "</ul>";

document.getElementById(
  "demo"
).innerHTML = `<br><strong>RESULTADO EX03:</strong><br><br> ${html}`;

//ex04
let pessoa = {
  nome: "Jhon",
  idade: 30,
  peso: 88.6,
};

for (let property in pessoa) {
  console.log(property);
  console.log(pessoa[property]);
}

//

//For of - cria um loop atráves de uma variável préviamente criada (String ou Array)
let nome = "Mateus";
let nomes = ["João", "Paulo", "Pedro"];

for (let char of nome) {
  console.log(char);
}

for (let nome2 of nomes) {
  console.log(nome2);
}
