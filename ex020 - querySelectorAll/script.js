document.querySelector("ol.lista"); // lista que estiver dentro de ol (Só pega o primeiro item)

document.querySelector("#titulo"); //Mudando o titulo;

let lista = document.querySelectorAll("li"); // todos os itens do HTML com essa condição (sem .)

for (let i in lista) {
  lista[i].style.color = "#FF0000"; // pq o querySelectorAll retorna um array, tem que percorrer os itens para poder alterar
}

document.querySelector("body"); //inclui o Body
