function trocarImagem(filename, animalname) {
  // .setAttribute adiciona um atributo (atributo, valor)
  document.querySelector(".imagem").setAttribute("src", filename);
  document.querySelector(".imagem").setAttribute("data-animal", animalname);
}

function pegarAnimal() {
  // .getAttribute pega o valor do atributo
  let animal = document.querySelector(".imagem").getAttribute("data-animal");
  alert("Esse é um " + animal);
}
