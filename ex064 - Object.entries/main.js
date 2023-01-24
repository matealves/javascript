const obj = {
  a: 25451,
  b: 11514,
  c: 81515,
};

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

Object.entries(obj).forEach(([key, value]) => {
  console.log(key, value);
});

// #################################

let h1 = document.querySelector("h1");

const atributos = {
  "content-editable": true,
  class: "titulo--h1",
  spellcheck: true,
};

Object.entries(atributos).forEach(([key, value]) => {
  h1.setAttribute(key, value);
});

console.log(h1);
