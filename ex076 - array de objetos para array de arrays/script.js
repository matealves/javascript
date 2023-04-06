const arrObjs = [
  { id: 1, name: "Mateus" },
  { id: 2, name: "Gabriel" },
  { id: 3, name: "Dayane" },
  { id: 4, name: "Roane" },
];

let arr = arrObjs.map((item) => {
  return Object.keys(item).map((key) => {
    return item[key];
  });
});

console.log(arr);
