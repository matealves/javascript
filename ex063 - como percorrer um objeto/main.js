let pessoas = {
  01: "Mateus",
  02: "João",
  03: "Roberta",
  04: "Maria",
};

// forEach
Object.keys(pessoas).forEach(function (item) {
  console.log(`${item} - ${pessoas[item]}`);
});
console.log("\n");

// for in
for (let item in pessoas) {
  console.log(`${item} - ${pessoas[item]}`);
}
console.log("\n");

// Object.entries

for (var [keys, value] of Object.entries(pessoas)) {
  console.log(`${keys} - ${value}`);
}
