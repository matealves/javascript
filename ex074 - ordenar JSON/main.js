const json = [
  {
    id: 1,
    name: "Atum",
    img: "images/atum.png",
    price: [14.49, 19.99, 29.99],
    sizes: ["320g", "530g", "860g"],
    description: "Molho, muçarela, atum, cebola fatiada e orégano.",
  },
  {
    id: 2,
    name: "Calabresa",
    img: "images/calabresa.png",
    price: [14.5, 19.99, 27.99],
    sizes: ["320g", "530g", "860g"],
    description:
      "Molho, muçarela, calabresa fatiada, cebola fatiada e orégano.",
  },
  {
    id: 3,
    name: "Camarão c/ catupiry",
    img: "images/camarao-c-catupiry.png",
    price: [11.5, 25.99, 32.99],
    sizes: ["320g", "530g", "860g"],
    description: "Molho, muçarela, camarões ao molho, catupiry e orégano.",
  },
  {
    id: 4,
    name: "4 Queijos",
    img: "images/4queijos.png",
    price: [10.5, 19.99, 47.99],
    sizes: ["320g", "530g", "860g"],
    description: "Molho, muçarela, provolone, parmesão, catupiry e orégano.",
  },
];

// ############## numbers
// slice() vazio faz uma cópia do Array
const data = json.slice().sort((a, b) => a.price[0] - b.price[0]);

// método alternativo
const data2 = json
  .map((item) => {
    return item;
  })
  .sort((a, b) => a.price[0] - b.price[0]);

console.log(data);
console.log(data2);

// ############## text
var items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic" },
  { name: "Zeros", value: 37 },
];
items.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  // a must be equal to b
  return 0;
});
