function addBola() {
  let bola = document.createElement("div"); // cria elemento no HTML
  bola.setAttribute("class", "bola"); // cria um atributo na Tag e passa o valor do atributo

  let p1 = Math.floor(Math.random() * 500); // Math.random gera um número decimal aleatório
  let p2 = Math.floor(Math.random() * 400); // Math.floor arredonda o número decimal

  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);

  bola.setAttribute(
    "style",
    "left:" +
      p1 +
      "px;top:" +
      p2 +
      "px;background-color:rgb(" +
      red +
      "," +
      green +
      "," +
      blue +
      ")"
  );

  bola.setAttribute("onclick", "estourar(this)");

  document.body.appendChild(bola); // adiciona no body o elemento
}

function estourar(elemento) {
  document.body.removeChild(elemento);
}

function iniciar() {
  let timer = setInterval(addBola, 1000); // ou sem variável

  setTimeout(function () {
    // parar intervalo após 10000 ms
    clearInterval(timer);
  }, 30000);
}