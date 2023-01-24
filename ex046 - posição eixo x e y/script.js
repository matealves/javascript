// selecionar elemento
let box = document.querySelector("#box");
console.log(box);

let coordenadas = box.getBoundingClientRect();
console.log(coordenadas);

if (coordenadas.x == 25) {
  alert("Chegou no 25");
}
